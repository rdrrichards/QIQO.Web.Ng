import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../orders/order.service';
import { IOrder } from '../models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-order',
  templateUrl: './account.order.component.html'
})
export class AccountOrderComponent implements OnInit, OnDestroy {
  order: IOrder;
  errMessage: string;
  private sub: Subscription;

  constructor(
    private _orderService: OrderService,
    private route: ActivatedRoute
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
