import { Injectable } from '@angular/core';
import { CONFIG } from '../shared/config';
import { IOrder } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  private _ordersUrl = CONFIG.baseUrls.orders; // 'http://localhost:34479/api/orders';
  private _openOrdersUrl = CONFIG.baseUrls.openorders; // 'http://localhost:34479/api/openorders';
  private _accountsUrl = CONFIG.baseUrls.accounts; // 'http://localhost:34479/api/accounts';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this._openOrdersUrl);
  }

  getAccountOrders(id: number): Observable<IOrder[]> {
    console.log(this._accountsUrl + '/' + id + '/orders');
    return this.http.get<IOrder[]>(this._accountsUrl + '/' + id + '/orders');
  }

  getAccountOrder(id: number, oid: number): Observable<IOrder> {
    return this.http.get<IOrder>(this._accountsUrl + '/' + id + '/orders/' + oid);
  }

  getOrder(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(this._ordersUrl + '/' + id);
  }

  addOrder(order: IOrder): Observable<any> {
    return this.http.post(this._ordersUrl, JSON.stringify(order));
  }

  updateOrder(order: IOrder): Observable<any> {
    return this.http.put(this._ordersUrl, JSON.stringify(order));
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this._ordersUrl + '/' + id);
  }

  // private handleError(error: Response) {
  //   console.error(error);
  //   this.exceptionService.catchBadResponse(error);
  //   return Observable.throw(error.status || 'Unknown error, likely an auth error');
  // }
}
