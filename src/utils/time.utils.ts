export function formatSessionTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}h` : `${h}h${m}m`;
}

export function scoreColor(score: number): string {
  if (score <= 3) return '#f44336'; // red
  if (score <= 5) return '#ffc107'; // amber
  if (score <= 8) return '#4caf50'; // green
  if (score === 9) return '#9c27b0'; // purple
  return '#2979ff';                  // brilliant blue (10)
}

export function scoreColorRgba(score: number, alpha = 0.12): string {
  const hex = scoreColor(score);
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
