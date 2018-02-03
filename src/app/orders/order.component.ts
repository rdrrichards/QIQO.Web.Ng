import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './order.service';
import { IOrder } from '../models/order';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy {
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
      console.log('Order id from the params: ' + id);
      this._orderService.getOrder(id)
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
