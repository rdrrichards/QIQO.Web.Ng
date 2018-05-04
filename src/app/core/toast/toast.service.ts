import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
    message: string;
}

@Injectable()
export class ToastService {
    private toastSubject = new Subject<ToastMessage>();

    toastState = this.toastSubject.asObservable();
    activate(message?: string) {
        this.toastSubject.next(<ToastMessage>{ message: message });
    }
}
