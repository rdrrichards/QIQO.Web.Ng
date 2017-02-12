import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from './product.service';
import { IProduct } from '../models/product';
import { IProductPage } from '../models/product-page';

@Component({
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Products';
    products: IProduct[];
    page: IProductPage;
    errMessage: string;
    selectedCategory = 'all';
    perPageCnt = 10;
    orderBy = 'productName';
    prod_cats = [
        ['all', 'All'],
        ['SweetMini', 'Sweet Minis'],
        ['Sweet9', 'Sweet 9"'],
        ['Sweet10', 'Sweet 10"'],
        ['Sweet8', 'Sweet 8"'],
        ['Sweet6', 'Sweet 6"']
    ];
    order_cats = [
        ['productName', 'Product Name'],
        ['productType', 'Product Type'],
        ['priceAscending', 'Price Ascending'],
        ['priceDescending', 'Price Descending']
    ];
    per_page_options = [10, 20, 40];

    constructor(private _productService: ProductService) {

    }
    ngOnInit() {
        console.log('Calling getProducts');
        this._productService.getProductPage()
            .subscribe(
            page => this.page = page,
            error => this.errMessage = <any>error
            );
    }

    next(page: number, psize: number, orderBy: string, category: string) {
        this._productService.getProductPage(page, psize | this.perPageCnt, this.orderBy || orderBy, this.selectedCategory || category)
            .subscribe(
            page => this.page = page,
            error => this.errMessage = <any>error
            );
    }

    canGoBack() {
        return !(this.page.currentPage > 1);
    }

    canGoForward() {
        return !(this.page.currentPage < this.page.totalPages);
    }

    categoryChanged(newValue: string) {
        // console.log('New Category: ' + newValue);
        // this.selectedCategory = newValue;
        this.next(1, this.perPageCnt, this.orderBy, this.selectedCategory);
    }

    pageCountChanged(newValue: number) {
        console.log('New Page Count: ' + newValue);
        this.perPageCnt = +newValue;
        this.next(1, this.perPageCnt, this.orderBy, this.selectedCategory);
    }

    orderByChanged(newValue: string) {
        console.log('New Order By: ' + newValue);
        this.orderBy = newValue;
        this.next(1, this.perPageCnt, this.orderBy, this.selectedCategory);
    }
}
