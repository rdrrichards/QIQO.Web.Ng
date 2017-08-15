import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProductPage } from '../models/product-page';
import { IProduct } from '../models/product';
import { ExceptionService } from '../core/exception.service';

@Injectable()
export class ProductService {
  private _productsUrl = CONFIG.baseUrls.products; // 'http://localhost:34479/api/products';
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    private exceptionService: ExceptionService) {
    // this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productsUrl)
      .map(response => response)
      // .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProductPage(page = 1, psize = 8, orderBy = 'productName', category = 'all'): Observable<IProductPage> {
    const url = this._productsUrl + '?page=' + page + '&psize=' + psize + '&category=' + category + '&orderBy=' + orderBy;
    console.log(url);
    return this.http.get<IProductPage>(url)
      .map(response => {
        // console.log(response.headers.get('content-type'));
        return response;
      })
      // .do(response => console.log('Headers: ' +  response.headers()))
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._productsUrl}/${id}`)
      .map(response => response)
      // .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  addProduct(product: IProduct): Observable<any> {
    console.log(`${this._productsUrl}/${product.productKey}`);
    return this.http.post(this._productsUrl, JSON.stringify(product), { headers: this._headers })
      .map(response => response)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  updateProduct(product: IProduct): Observable<any> {
    const body = JSON.stringify(product);
    console.log(`${this._productsUrl}/${product.productKey}`);
    return this.http.put(`${this._productsUrl}`, body, { headers: this._headers })
      .map(response => response)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this._productsUrl}/${id}`, { headers: this._headers })
      .map(response => response)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.exceptionService.catchBadResponse(error);
    console.error(error);
    return Observable.throw(error.status || 'Unknown error, likely an auth error');
  }

}
