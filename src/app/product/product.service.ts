import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../shared/config';
import { Observable } from 'rxjs';
import { IProductPage } from '../models/product-page';
import { IProduct } from '../models/product';

@Injectable()
export class ProductService {
  private _productsUrl = CONFIG.baseUrls.products;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productsUrl);
  }

  getProductPage(page = 1, psize = 8, orderBy = 'productName', category = 'all'): Observable<IProductPage> {
    return this.http.get<IProductPage>(`${this._productsUrl}?page=${page}&psize=${psize}&category=${category}&orderBy=${orderBy}`);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._productsUrl}/${id}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this._productsUrl, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this._productsUrl}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this._productsUrl}/${id}`);
  }
}
