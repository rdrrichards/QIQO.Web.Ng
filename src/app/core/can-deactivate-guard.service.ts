
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

export interface CanComponentDeactivate {
    canDeactivate: () => any;
}

@Injectable()
export class CanDeactivateGuard  {
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
