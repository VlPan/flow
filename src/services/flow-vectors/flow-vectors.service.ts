import { Injectable, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FlowVector, Destination, CompletionCriteria, DEFAULT_VECTOR_COLOR, DEFAULT_VECTOR_ICON } from '../../models/flow-vector.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class FlowVectorsService {
  private readonly storage = inject(LocalStorageService);
  private readonly _vectors = signal<FlowVector[]>(this.storage.get('flowVectors') ?? []);

  readonly vectors = computed(() => this._vectors().filter(v => !v.deleted));

  create(data: Omit<FlowVector, 'id' | 'deleted'>): void {
    const vectorId = uuidv4();
    const vector: FlowVector = {
      ...data,
      id: vectorId,
      color: data.color || DEFAULT_VECTOR_COLOR,
      icon: data.icon || DEFAULT_VECTOR_ICON,
      deleted: false,
      destinations: this.assignDestinationIds(data.destinations, vectorId),
      finalDestinations: this.assignDestinationIds(data.finalDestinations, vectorId),
    };
    this._vectors.update(all => [...all, vector]);
    this.sync();
  }

  update(id: string, data: Partial<Omit<FlowVector, 'id' | 'deleted'>>): void {
    this._vectors.update(all =>
      all.map(v => {
        if (v.id !== id) return v;
        return {
          ...v,
          ...data,
          destinations: data.destinations
            ? this.assignDestinationIds(data.destinations, id)
            : v.destinations,
          finalDestinations: data.finalDestinations
            ? this.assignDestinationIds(data.finalDestinations, id)
            : v.finalDestinations,
        };
      })
    );
    this.sync();
  }

  softDelete(id: string): void {
    this._vectors.update(all =>
      all.map(v => (v.id === id ? { ...v, deleted: true } : v))
    );
    this.sync();
  }

  toggleDestinationComplete(vectorId: string, destId: string, isFinal: boolean): void {
    this._vectors.update(all =>
      all.map(v => {
        if (v.id !== vectorId) return v;
        const key = isFinal ? 'finalDestinations' : 'destinations';
        return {
          ...v,
          [key]: v[key].map((d: Destination) =>
            d.id === destId ? { ...d, completed: !d.completed } : d
          ),
        };
      })
    );
    this.sync();
  }

  toggleCriteriaComplete(
    vectorId: string,
    destId: string,
    criteriaId: string,
    isFinal: boolean
  ): void {
    this._vectors.update(all =>
      all.map(v => {
        if (v.id !== vectorId) return v;
        const key = isFinal ? 'finalDestinations' : 'destinations';
        return {
          ...v,
          [key]: v[key].map((d: Destination) => {
            if (d.id !== destId) return d;
            return {
              ...d,
              completionCriteria: d.completionCriteria.map((c: CompletionCriteria) =>
                c.id === criteriaId ? { ...c, completed: !c.completed } : c
              ),
            };
          }),
        };
      })
    );
    this.sync();
  }

  private assignDestinationIds(destinations: Destination[], vectorId: string): Destination[] {
    return destinations.map(d => {
      const destId = d.id || uuidv4();
      return {
        ...d,
        completed: d.completed ?? false,
        id: destId,
        vectorId,
        completionCriteria: d.completionCriteria.map(c => ({
          ...c,
          completed: c.completed ?? false,
          id: c.id || uuidv4(),
          destinationId: destId,
        })),
      };
    });
  }

  private sync(): void {
    this.storage.set('flowVectors', this._vectors());
  }
}
