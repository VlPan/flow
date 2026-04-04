import { Component, inject, signal, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ColorCompactModule } from 'ngx-color/compact';
import { FlowVector, DEFAULT_VECTOR_COLOR, DEFAULT_VECTOR_ICON } from '../../models/flow-vector.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { OTHERS_CATEGORY_ID } from '../../models/category.model';

@Component({
  selector: 'app-flow-vector-form',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    ColorCompactModule,
  ],
  templateUrl: './flow-vector-form.html',
  styleUrl: './flow-vector-form.css',
})
export class FlowVectorForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<FlowVectorForm>);
  private readonly categoriesService = inject(CategoriesService);
  protected readonly data = inject<FlowVector | null>(MAT_DIALOG_DATA);

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
    icon: [this.data?.icon],
    color: [this.data?.color ?? DEFAULT_VECTOR_COLOR],
    categoryId: [this.data?.categoryId ?? null],
    destinations: this.fb.array(
      (this.data?.destinations ?? []).map(d => this.buildDestinationGroup(d))
    ),
    finalDestinations: this.fb.array(
      (this.data?.finalDestinations ?? []).map(d => this.buildDestinationGroup(d))
    ),
  });

  private buildDestinationGroup(dest?: { id?: string; name: string; completed?: boolean; completionCriteria: Array<{ id?: string; name: string; completed?: boolean }> }): FormGroup {
    return this.fb.group({
      id: [dest?.id ?? null],
      name: [dest?.name ?? '', Validators.required],
      completed: [dest?.completed ?? false],
      completionCriteria: this.fb.array(
        (dest?.completionCriteria ?? []).map(c => this.buildCriteriaGroup(c))
      ),
    });
  }

  private buildCriteriaGroup(criteria?: { id?: string; name: string; completed?: boolean }): FormGroup {
    return this.fb.group({
      id: [criteria?.id ?? null],
      name: [criteria?.name ?? '', Validators.required],
      completed: [criteria?.completed ?? false],
    });
  }

  protected get destinations(): FormArray {
    return this.form.get('destinations') as FormArray;
  }

  protected get finalDestinations(): FormArray {
    return this.form.get('finalDestinations') as FormArray;
  }

  protected getCriterias(destGroup: FormGroup): FormArray {
    return destGroup.get('completionCriteria') as FormArray;
  }

  protected asFormGroup(ctrl: AbstractControl): FormGroup {
    return ctrl as FormGroup;
  }

  protected addDestination(arr: FormArray): void {
    arr.push(this.buildDestinationGroup());
  }

  protected removeDestination(arr: FormArray, i: number): void {
    arr.removeAt(i);
  }

  protected addCriteria(destGroup: FormGroup): void {
    this.getCriterias(destGroup).push(this.buildCriteriaGroup());
  }

  protected removeCriteria(destGroup: FormGroup, i: number): void {
    this.getCriterias(destGroup).removeAt(i);
  }

  protected onColorChange(event: { color: { hex: string } }): void {
    this.form.get('color')!.setValue(event.color.hex);
  }

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      name: raw.name,
      icon: raw.icon || DEFAULT_VECTOR_ICON,
      color: raw.color || DEFAULT_VECTOR_COLOR,
      categoryId: raw.categoryId ?? null,
      destinations: this.mapRawDestinations(raw.destinations),
      finalDestinations: this.mapRawDestinations(raw.finalDestinations),
    });
  }

  private mapRawDestinations(
    rawDests: Array<{ id: string | null; name: string; completed: boolean; completionCriteria: Array<{ id: string | null; name: string; completed: boolean }> }>
  ) {
    return rawDests.map(d => ({
      ...(d.id ? { id: d.id } : {}),
      name: d.name,
      completed: d.completed,
      completionCriteria: d.completionCriteria.map(c => ({
        ...(c.id ? { id: c.id } : {}),
        name: c.name,
        completed: c.completed,
      })),
    }));
  }
}
