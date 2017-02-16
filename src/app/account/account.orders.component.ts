import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IOrder } from '../models/order';
import { OrderService } from '../orders/order.service';

@Component({
    templateUrl: './account.orders.component.html',
})

export class AccountOrdersComponent implements OnInit {
    public pageTitle = 'Account Orders';
    public orders: IOrder[];
    public errMessage: string;
    private sub: any;

    constructor(private _orderService: OrderService,
        private route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = +params['id']; // (+) converts string 'id' to a number
            this.pageTitle += `: ${id}`;
            console.log('Account id from the params: ' + id);
            this._orderService.getAccountOrders(id)
                .subscribe(
                orders => this.orders = orders,
                error => this.errMessage = <any>error
                );
        });
    }
}
