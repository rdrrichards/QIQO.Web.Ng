import { Product } from '../models/product';

export interface ICartItem {
    product: Product;
    quantity: number;
    price: number;
}

export class CartItem implements ICartItem {
    constructor(public product: Product,
        public quantity: number,
        public price: number) {
    }
}
