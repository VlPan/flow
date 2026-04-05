import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { STORAGE_REGISTRY, StorageKey } from '../../../services/local-storage/storage-registry';
import { ConfirmDialog } from '../../../components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-data-settings-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule],
  templateUrl: './data-settings.page.html',
  styleUrl: './data-settings.page.css',
})
export class DataSettingsPage {
  private readonly localStorage = inject(LocalStorageService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);

  readonly copied = signal(false);

  copyToClipboard(): void {
    const data: Record<string, unknown> = {};

    for (const key of Object.keys(STORAGE_REGISTRY) as StorageKey[]) {
      const value = this.localStorage.get(key);
      if (value !== null) {
        data[key] = value;
      }
    }

    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      this.copied.set(true);
      this.snackBar.open('Data copied to clipboard', 'OK', { duration: 3000 });
      setTimeout(() => this.copied.set(false), 3000);
    });
  }

  importFromClipboard(): void {
    navigator.clipboard.readText().then((text) => {
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        this.snackBar.open('Clipboard does not contain valid JSON', 'OK', { duration: 4000 });
        return;
      }

      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        this.snackBar.open('Invalid data format', 'OK', { duration: 4000 });
        return;
      }

      const incoming = parsed as Record<string, unknown>;
      const validKeys = Object.keys(STORAGE_REGISTRY) as StorageKey[];
      const keysToImport = validKeys.filter((k) => k in incoming);

      if (keysToImport.length === 0) {
        this.snackBar.open('No recognisable app data found in clipboard', 'OK', { duration: 4000 });
        return;
      }

      this.dialog
        .open(ConfirmDialog, {
          width: '360px',
          data: {
            message: `This will overwrite your current app data with the clipboard contents. This cannot be undone. Continue?`,
            confirmLabel: 'Import',
          },
        })
        .afterClosed()
        .subscribe((confirmed: boolean) => {
          if (!confirmed) return;

          let imported = 0;
          for (const key of keysToImport) {
            const schema = STORAGE_REGISTRY[key];
            const result = schema.safeParse(incoming[key]);
            if (result.success) {
              this.localStorage.set(key, result.data as never);
              imported++;
            }
          }

          this.snackBar.open(`Imported ${imported} of ${keysToImport.length} keys. Reload the app to see changes.`, 'OK', { duration: 6000 });
        });
    });
  }
}
