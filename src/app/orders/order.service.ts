import { Injectable } from '@angular/core';
import { CONFIG } from '../shared/config';
import { IOrder } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  private _ordersUrl = CONFIG.baseUrls.orders;
  private _openOrdersUrl = CONFIG.baseUrls.openorders;
  private _accountsUrl = CONFIG.baseUrls.accounts;

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

  addOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(this._ordersUrl, order);
  }

  updateOrder(order: IOrder): Observable<IOrder> {
    return this.http.put<IOrder>(this._ordersUrl, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this._ordersUrl + '/' + id);
  }
}
