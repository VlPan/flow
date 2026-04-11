import { Component, inject, signal, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ColorCompactModule } from 'ngx-color/compact';
import { Project, DEFAULT_PROJECT_COLOR, DEFAULT_PROJECT_ICON } from '../../models/project.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { OTHERS_CATEGORY_ID } from '../../models/category.model';
import { toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-project-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CdkDropList,
    CdkDrag,
    ColorCompactModule,
  ],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css',
})
export class ProjectForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<ProjectForm>);
  private readonly categoriesService = inject(CategoriesService);
  protected readonly data = inject<Project | null>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data;
  protected colorPickerOpen = signal(false);
  protected readonly OTHERS_CATEGORY_ID = OTHERS_CATEGORY_ID;
  protected readonly categories = this.categoriesService.categories;

  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.colorPickerOpen()) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.color-field')) {
      this.colorPickerOpen.set(false);
    }
  }

  protected readonly form: FormGroup = this.fb.group({
    name: [this.data?.name ?? '', Validators.required],
    icon: [this.data?.icon ?? DEFAULT_PROJECT_ICON],
    color: [this.data?.color ?? DEFAULT_PROJECT_COLOR],
    categoryId: [this.data?.categoryId ?? null],
    startDate: [this.data?.startDate ? new Date(this.data.startDate + 'T00:00:00') : new Date(), Validators.required],
    endDate: [this.data?.endDate ? new Date(this.data.endDate + 'T00:00:00') : null],
    tasks: this.fb.array(
      (this.data?.tasks ?? [])
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(t => this.buildTaskGroup(t))
    ),
  });

  protected get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  protected asFormGroup(ctrl: AbstractControl): FormGroup {
    return ctrl as FormGroup;
  }

  protected buildTaskGroup(task?: { id?: string; name?: string; minPoints?: number; maxPoints?: number; claimed?: boolean; claimedPoints?: number | null; order?: number }): FormGroup {
    return this.fb.group({
      id: [task?.id ?? null],
      name: [task?.name ?? '', Validators.required],
      minPoints: [task?.minPoints ?? 50, [Validators.required, Validators.min(0)]],
      maxPoints: [task?.maxPoints ?? 150, [Validators.required, Validators.min(0)]],
      claimed: [task?.claimed ?? false],
      claimedPoints: [task?.claimedPoints ?? null],
    });
  }

  protected addTask(): void {
    this.tasks.push(this.buildTaskGroup());
  }

  protected removeTask(i: number): void {
    this.tasks.removeAt(i);
  }

  protected onDrop(event: CdkDragDrop<AbstractControl[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    const arr = this.tasks.controls as FormGroup[];
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.tasks.setValue(arr.map(g => g.getRawValue()));
  }

  protected onColorChange(event: { color: { hex: string } }): void {
    this.form.get('color')!.setValue(event.color.hex);
  }

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      name: raw.name,
      icon: raw.icon || DEFAULT_PROJECT_ICON,
      color: raw.color || DEFAULT_PROJECT_COLOR,
      categoryId: raw.categoryId ?? null,
      startDate: toLocalDateString(raw.startDate as Date),
      endDate: raw.endDate ? toLocalDateString(raw.endDate as Date) : null,
      tasks: (raw.tasks as Array<{ id: string | null; name: string; minPoints: number; maxPoints: number; claimed: boolean; claimedPoints: number | null }>).map((t, index) => ({
        ...(t.id ? { id: t.id } : {}),
        name: t.name,
        minPoints: t.minPoints,
        maxPoints: t.maxPoints,
        claimed: t.claimed,
        claimedPoints: t.claimedPoints,
        order: index,
      })),
    });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
