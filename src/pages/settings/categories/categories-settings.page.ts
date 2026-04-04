import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CategoriesService } from '../../../services/categories/categories.service';
import { CategoryForm } from '../../../components/category-form/category-form';
import { ConfirmDialog } from '../../../components/confirm-dialog/confirm-dialog';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-settings-page',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './categories-settings.page.html',
  styleUrl: './categories-settings.page.css',
})
export class CategoriesSettingsPage {
  private readonly categoriesService = inject(CategoriesService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly categories = this.categoriesService.categories;

  openCreateDialog(): void {
    this.dialog
      .open(CategoryForm, { width: '400px', data: null })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.categoriesService.create(result);
          this.snackBar.open('Category created', 'OK', { duration: 3000 });
        }
      });
  }

  openEditDialog(category: Category): void {
    this.dialog
      .open(CategoryForm, { width: '400px', data: category })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.categoriesService.update(category.id, result);
          this.snackBar.open('Changes saved', 'OK', { duration: 3000 });
        }
      });
  }

  onDeleteRequested(category: Category): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Delete "${category.name}"? Flow vectors in this category will move to "Others".` },
        width: '360px',
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.categoriesService.softDelete(category.id);
          this.snackBar.open('Category deleted', 'OK', { duration: 3000 });
        }
      });
  }
}
