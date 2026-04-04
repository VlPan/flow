import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { vi } from 'vitest';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ConfirmDialog, ConfirmDialogData } from './confirm-dialog';

function setup(data: ConfirmDialogData) {
  const mockClose = vi.fn();
  TestBed.configureTestingModule({
    imports: [ConfirmDialog],
    providers: [
      provideNoopAnimations(),
      { provide: MAT_DIALOG_DATA, useValue: data },
      { provide: MatDialogRef, useValue: { close: mockClose } },
    ],
  });
  const fixture: ComponentFixture<ConfirmDialog> = TestBed.createComponent(ConfirmDialog);
  return { fixture, mockClose };
}

describe('ConfirmDialog', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('renders the provided message', async () => {
    const { fixture } = setup({ message: 'Are you sure you want to delete this?' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Are you sure you want to delete this?');
  });

  it('uses "Cancel" as the default cancel label', async () => {
    const { fixture } = setup({ message: 'Proceed?' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Cancel');
  });

  it('renders a custom cancelLabel when provided', async () => {
    const { fixture } = setup({ message: 'Proceed?', cancelLabel: 'Go back' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Go back');
  });

  it('uses "Confirm" as the default confirm label', async () => {
    const { fixture } = setup({ message: 'Proceed?' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Confirm');
  });

  it('renders a custom confirmLabel when provided', async () => {
    const { fixture } = setup({ message: 'Delete item?', confirmLabel: 'Delete' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Delete');
  });

  it('renders the dialog title', async () => {
    const { fixture } = setup({ message: 'test' });
    await fixture.whenStable();
    const title = fixture.nativeElement.querySelector('h2');
    expect(title?.textContent?.trim()).toBe('Confirm');
  });
});
