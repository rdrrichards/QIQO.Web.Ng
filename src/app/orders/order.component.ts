import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from './order.service';
import { IOrder } from '../models/order';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
    order: IOrder;
    errMessage: string;
    private sub: any;

    constructor(
        private _orderService: OrderService,
        private route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this._getOrder();
    }

    private _getOrder(){
        this.sub = this.route.params.subscribe(params => {
            const id = +params['id']; // (+) converts string 'id' to a number
            console.log('Order id from the params: ' + id);
            this._orderService.getOrder(id)
                .subscribe(
                    order => this.order = order,
                    error => this.errMessage = <any>error
            );
        });
    }
}
