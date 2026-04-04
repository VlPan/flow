import { InjectionToken } from '@angular/core';

export const TODAY_DATE = new InjectionToken<Date>('TODAY_DATE', {
  providedIn: 'root',
  factory: () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  },
});
