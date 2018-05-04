import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => any;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ?
          Observable.create(component.canDeactivate()) : true;
    }

    // private toObservable(deactivate: Promise<boolean> | boolean): Observable<boolean> | boolean {
    //     const p = Promise.resolve(deactivate);
    //     const o = Observable.fromPromise(p);
    //     return o;
    // }
}
