import { IAccount } from './account';
import { ICartItem } from './cart-item';

export interface ICart {
  id: string;
  orderDeliverByDate?: Date | undefined;
  account: IAccount | undefined;
  cartItems: ICartItem[] | undefined;
}

export class Cart implements ICart {
  constructor(public id: string,
    public account: IAccount | undefined,
    public cartItems: ICartItem[] | undefined,
    public orderDeliverByDate?: Date | undefined) {
  }
}
