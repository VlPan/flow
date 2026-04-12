import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type VacationRewardType = 'streak' | 'random';

export interface VacationRewardDialogData {
  type: VacationRewardType;
}

@Component({
  selector: 'app-vacation-reward-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="reward-container">
      <div class="reward-glow"></div>
      <div class="reward-content">
        <div class="reward-emoji">{{ emoji }}</div>
        <h2 class="reward-title">{{ title }}</h2>
        <p class="reward-message">{{ message }}</p>
        <div class="reward-badge">
          <span class="badge-icon">🏖️</span>
          <span class="badge-text">+1 Vacation Day</span>
        </div>
        <button mat-flat-button class="claim-btn" (click)="dialogRef.close()">
          {{ claimLabel }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .reward-container {
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      background: linear-gradient(135deg, #1a0533 0%, #2d1b5e 50%, #1a0533 100%);
      padding: 0;
      min-width: 320px;
    }
    .reward-glow {
      position: absolute;
      top: -60px; left: 50%; transform: translateX(-50%);
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(149,117,205,0.4) 0%, transparent 70%);
      pointer-events: none;
    }
    .reward-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 40px 32px 32px;
      text-align: center;
    }
    .reward-emoji {
      font-size: 56px;
      line-height: 1;
      animation: bounce 0.6s ease-out;
    }
    @keyframes bounce {
      0% { transform: scale(0.3); opacity: 0; }
      60% { transform: scale(1.2); }
      100% { transform: scale(1); opacity: 1; }
    }
    .reward-title {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
    .reward-message {
      color: rgba(255,255,255,0.75);
      font-size: 15px;
      margin: 0;
      max-width: 260px;
      line-height: 1.5;
    }
    .reward-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(149,117,205,0.3);
      border: 1px solid rgba(149,117,205,0.6);
      border-radius: 24px;
      padding: 8px 20px;
      margin-top: 4px;
    }
    .badge-icon { font-size: 20px; }
    .badge-text {
      color: #CE93D8;
      font-weight: 700;
      font-size: 16px;
    }
    .claim-btn {
      margin-top: 8px;
      background: #9575CD !important;
      color: white !important;
      font-weight: 600;
      padding: 0 32px;
      border-radius: 24px;
      height: 44px;
      font-size: 15px;
    }
  `],
})
export class VacationRewardDialog {
  protected readonly dialogRef = inject(MatDialogRef<VacationRewardDialog>);
  protected readonly data = inject<VacationRewardDialogData>(MAT_DIALOG_DATA);

  protected readonly emoji = this.data.type === 'streak' ? '🌟' : '🎲';
  protected readonly title = this.data.type === 'streak' ? 'You earned a Vacation Day!' : 'Lucky Day!';
  protected readonly message = this.data.type === 'streak'
    ? 'You tracked 5+ days this week. Time to recharge — you deserve it!'
    : 'A surprise vacation day just landed in your pocket. Keep up the great work!';
  protected readonly claimLabel = this.data.type === 'streak' ? 'Claim Reward' : 'Awesome!';
}
