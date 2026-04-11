import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Project, ProjectStatus } from '../../models/project.model';
import { ProjectsService } from '../../services/projects/projects.service';

export interface ProjectStatusDialogData {
  project: Project;
}

export interface ProjectStatusDialogResult {
  status: ProjectStatus;
  important: boolean;
  archive?: boolean;
}

@Component({
  selector: 'app-project-status-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatCheckboxModule, MatIconModule],
  templateUrl: './project-status-dialog.html',
  styleUrl: './project-status-dialog.css',
})
export class ProjectStatusDialog {
  private readonly dialogRef = inject(MatDialogRef<ProjectStatusDialog>);
  protected readonly data = inject<ProjectStatusDialogData>(MAT_DIALOG_DATA);
  private readonly projectsService = inject(ProjectsService);

  protected status = signal<ProjectStatus>(this.data.project.status);
  protected important = signal(this.data.project.important);

  protected get canMarkImportant(): boolean {
    if (this.important()) return true; // already important, can uncheck
    return this.projectsService.canMarkImportant(this.data.project.id);
  }

  protected setStatus(s: ProjectStatus): void {
    this.status.set(s);
  }

  protected save(): void {
    this.dialogRef.close({
      status: this.status(),
      important: this.important(),
    } satisfies ProjectStatusDialogResult);
  }

  protected archive(): void {
    this.dialogRef.close({
      status: this.status(),
      important: this.important(),
      archive: true,
    } satisfies ProjectStatusDialogResult);
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
