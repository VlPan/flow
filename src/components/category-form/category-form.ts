import { Component, inject, signal, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ColorCompactModule } from 'ngx-color/compact';
import { Category, DEFAULT_CATEGORY_COLOR } from '../../models/category.model';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ColorCompactModule,
  ],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css',
})
export class CategoryForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<CategoryForm>);
  protected readonly data = inject<Category | null>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data;
  protected colorPickerOpen = signal(false);

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
    color: [this.data?.color ?? DEFAULT_CATEGORY_COLOR],
  });

  protected onColorChange(event: { color: { hex: string } }): void {
    this.form.get('color')!.setValue(event.color.hex);
  }

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      name: raw.name,
      color: raw.color || DEFAULT_CATEGORY_COLOR,
    });
  }
}
