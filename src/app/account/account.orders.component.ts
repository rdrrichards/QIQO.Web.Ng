import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../models/order';
import { OrderService } from '../orders/order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './account.orders.component.html',
})

export class AccountOrdersComponent implements OnInit, OnDestroy {
    public pageTitle = 'Account Orders';
    public orders: IOrder[];
    public errMessage: string;
    private sub: Subscription;

    constructor(private _orderService: OrderService,
        private route: ActivatedRoute) {
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

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}
