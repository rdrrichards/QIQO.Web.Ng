import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): boolean {
        return component.canDeactivate ?
            component.canDeactivate() : true;
    }
}