import { IProduct } from './product';

export interface ICartItem {
    product: IProduct;
    quantity: number;
    price: number;
}

export class CartItem implements ICartItem {
    constructor(public product: IProduct,
        public quantity: number,
        public price: number) {
    }
}
