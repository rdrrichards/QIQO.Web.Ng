import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../orders/order.service';
import { IOrder } from '../models/order';

@Component({
    selector: 'app-account-order',
    templateUrl: './account.order.component.html'
})
export class AccountOrderComponent implements OnInit {
    order: IOrder;
    errMessage: string;
    private sub: any;

    constructor(
        private _orderService: OrderService,
        private route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._getOrder();
    }

    private _getOrder() {
        this.sub = this.route.params.subscribe(params => {
            const id = +params['id']; // (+) converts string 'id' to a number
            const oid = +params['oid']; // (+) converts string 'id' to a number
            console.log('Trying to get param and call getAccountOrder');
            console.log('Account id from the params: ' + id);
            console.log('Account oid from the params: ' + oid);
            this._orderService.getAccountOrder(id, oid)
                .subscribe(
                order => this.order = order,
                error => this.errMessage = <any>error
                );
        });
    }
}