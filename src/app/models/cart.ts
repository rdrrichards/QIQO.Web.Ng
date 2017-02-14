import { IAccount } from './account';
import { IProduct } from './product';
import { ICartItem } from './cart-item';

export interface ICart {
    id: string;
    orderDeliverByDate?: Date;
    account: IAccount;
    cartItems: ICartItem[];
}

export class Cart implements ICart{
    constructor(public id: string,
        public account: IAccount,
        public cartItems: ICartItem[],
        public orderDeliverByDate?: Date) {
    }
}
