import { Injectable } from '@angular/core';
import { IOrder } from '../models/order';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {
    private _ordersUrl = 'http://localhost:49847/api/orders';
    private _openOrdersUrl = 'http://localhost:49847/api/openorders';
    private _accountsUrl = 'http://localhost:49847/api/accounts';

    constructor(private http: Http) { }

    getOrders(): Observable<IOrder[]> {
        return this.http.get(this._openOrdersUrl)
            .map((response: Response) => <IOrder[]>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAccountOrders(id: number): Observable<IOrder[]> {
        console.log(this._accountsUrl + '/' + id + '/orders');
        return this.http.get(this._accountsUrl + '/' + id + '/orders')
            .map((response: Response) => <IOrder[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAccountOrder(id: number, oid: number): Observable<IOrder> {
        return this.http.get(this._accountsUrl + '/' + id + '/orders/' + oid)
            .map((response: Response) => <IOrder>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOrder(id: number): Observable<IOrder> {
        return this.http.get(this._ordersUrl + '/' + id)
            .map((response: Response) => <IOrder>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addOrder(order: IOrder): Observable<any> {
        return this.http.post(this._ordersUrl, JSON.stringify(order))
            .map((response: Response) => response.json().data)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    updateOrder(order: IOrder): Observable<any> {
        return this.http.put(this._ordersUrl, JSON.stringify(order))
            .map((response: Response) => response.json().data)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteOrder(id: number): Observable<any> {
        return this.http.delete(this._ordersUrl + '/' + id)
            .map((response: Response) => response.json().data)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.status || 'Unknown error, likely an auth error');
    }
}
