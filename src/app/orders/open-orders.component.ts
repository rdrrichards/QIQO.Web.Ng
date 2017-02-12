import { Component, OnInit } from '@angular/core';
// import { OrderComponent } from './order.component';
import { IOrder } from '../models/order';
import { OrderService } from './order.service';

@Component({
    templateUrl: './open-orders.component.html'
})
export class OpenOrdersComponent implements OnInit {
    public pageTitle = 'Orders';
    public orders: IOrder[];
    public errMessage: string;

    constructor(private _orderService: OrderService) {
    }

    ngOnInit() {
        console.log('Calling getOrders');
        this._orderService.getOrders()
            .subscribe(
            orders => this.orders = orders,
            error => this.errMessage = <any>error
            );
    }
}
