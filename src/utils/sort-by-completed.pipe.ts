import { Pipe, PipeTransform } from '@angular/core';
import { sortByCompleted } from './sort.utils';

@Pipe({ name: 'sortByCompleted', standalone: true, pure: true })
export class SortByCompletedPipe implements PipeTransform {
  transform<T extends { completed: boolean }>(items: T[]): T[] {
    return sortByCompleted(items);
  }
}
