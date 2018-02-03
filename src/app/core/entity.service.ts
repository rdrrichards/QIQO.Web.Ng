import { Injectable } from '@angular/core';

@Injectable()
export class EntityService {
  clone<T>(source: T): T {
    return Object.assign({}, source);
  }

  merge = (target: any, ...sources: any[]) => Object.assign(target, ...sources);

  propertiesDiffer = (entityA: any = {}, entityB: any = {}) =>
    Object.keys(entityA).find(key => entityA[key] !== entityB[key])
}
