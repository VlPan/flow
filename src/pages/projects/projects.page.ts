import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProjectsService } from '../../services/projects/projects.service';
import { Project, ProjectTask } from '../../models/project.model';
import { ProjectForm } from '../../components/project-form/project-form';
import { ProjectStatusDialog, ProjectStatusDialogData, ProjectStatusDialogResult } from '../../components/project-status-dialog/project-status-dialog';
import { TaskClaimDialog, TaskClaimDialogData, TaskClaimDialogResult } from '../../components/task-claim-dialog/task-claim-dialog';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';
import { toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatMenuModule, CdkAccordionModule, CdkDropList, CdkDrag],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0', overflow: 'hidden', opacity: 0 }),
        animate('200ms ease', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('200ms ease', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProjectsPage {
  protected readonly projectsService = inject(ProjectsService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly archivedExpanded = signal(false);

  protected completionPercent(project: Project): number {
    return this.projectsService.completionPercent(project);
  }

  protected timeElapsedPercent(project: Project): number {
    if (!project.endDate) return 0;
    const start = new Date(project.startDate + 'T00:00:00').getTime();
    const end = new Date(project.endDate + 'T00:00:00').getTime();
    const now = Date.now();
    if (end <= start) return 100;
    return Math.min(100, Math.round(((now - start) / (end - start)) * 100));
  }

  protected daysLabel(project: Project): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!project.endDate) {
      const start = new Date(project.startDate + 'T00:00:00');
      start.setHours(0, 0, 0, 0);
      const days = Math.round((today.getTime() - start.getTime()) / 86400000);
      return `${days} day${days !== 1 ? 's' : ''} since`;
    }

    const end = new Date(project.endDate + 'T00:00:00');
    end.setHours(0, 0, 0, 0);
    const diff = Math.round((end.getTime() - today.getTime()) / 86400000);
    if (diff < 0) return `${Math.abs(diff)} day${Math.abs(diff) !== 1 ? 's' : ''} overdue`;
    return `${diff} day${diff !== 1 ? 's' : ''} left`;
  }

  protected isOverdue(project: Project): boolean {
    if (!project.endDate) return false;
    const today = toLocalDateString(new Date());
    return project.endDate < today;
  }

  protected statusColor(status: Project['status']): string {
    switch (status) {
      case 'green': return '#4caf50';
      case 'yellow': return '#ff9800';
      case 'red': return '#f44336';
      default: return '#9e9e9e';
    }
  }

  protected openCreateDialog(): void {
    this.dialog
      .open(ProjectForm, { width: '620px', data: null })
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;
        this.projectsService.create({
          ...result,
          status: 'unset',
          important: false,
        });
        this.snackBar.open('Project created', 'OK', { duration: 3000 });
      });
  }

  protected openEditDialog(project: Project): void {
    this.dialog
      .open(ProjectForm, { width: '620px', data: project })
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;
        this.projectsService.update(project.id, result);
        this.snackBar.open('Project saved', 'OK', { duration: 3000 });
      });
  }

  protected openStatusDialog(project: Project): void {
    this.dialog
      .open(ProjectStatusDialog, {
        width: '400px',
        data: { project } satisfies ProjectStatusDialogData,
      })
      .afterClosed()
      .subscribe((result?: ProjectStatusDialogResult) => {
        if (!result) return;
        this.projectsService.setStatus(project.id, result.status, result.important);
        if (result.archive) {
          this.projectsService.setArchived(project.id, true);
          this.snackBar.open('Project archived', 'OK', { duration: 3000 });
        }
      });
  }

  protected onDeleteProject(project: Project): void {
    this.dialog
      .open(ConfirmDialog, {
        width: '360px',
        data: { message: `Delete "${project.name}"? This cannot be undone.` },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.projectsService.softDelete(project.id);
      });
  }

  protected onUnarchive(project: Project): void {
    this.projectsService.setArchived(project.id, false);
  }

  protected onClaimTask(project: Project, task: ProjectTask): void {
    if (task.claimed) return;
    this.dialog
      .open(TaskClaimDialog, {
        width: '400px',
        data: { task } satisfies TaskClaimDialogData,
      })
      .afterClosed()
      .subscribe((result?: TaskClaimDialogResult) => {
        if (!result) return;
        this.projectsService.claimTask(project.id, task.id, result.points);
        this.snackBar.open(`+${result.points} pts earned!`, 'OK', { duration: 3000 });
      });
  }

  protected sortedTasks(project: Project): ProjectTask[] {
    return [...project.tasks].sort((a, b) => a.order - b.order);
  }

  protected onTaskDrop(project: Project, event: CdkDragDrop<ProjectTask[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    const tasks = this.sortedTasks(project);
    moveItemInArray(tasks, event.previousIndex, event.currentIndex);
    const reordered = tasks.map((t, i) => ({ ...t, order: i }));
    this.projectsService.update(project.id, { tasks: reordered });
  }
}
