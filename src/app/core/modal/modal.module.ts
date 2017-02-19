import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ModalComponent],
    declarations: [ModalComponent],
    providers: [ModalService],
})
export class ModalModule {}
