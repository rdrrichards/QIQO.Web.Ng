import { IAccount } from './account';
import { IProduct } from './product';
import { IAddress } from './address';

export interface IOrder{
    orderKey: number;
    orderNumber: string;
    orderEntryDate: Date;
    orderStatusDate: Date;
    orderStatus: string;
    orderCompleteDate?: Date;
    orderShipDate?: Date;
    orderDeliverByDate?: Date;
    orderItemCount: number;
    orderValueSum: number;
    account: IAccount;
    orderItems?: IOrderItem[];
    salesRepName: string;
    accountRepName: string;
    accountContactName: string;
    accountCode: string;
}

export interface IOrderItem {
    orderItemKey: number;
    orderKey: number;
    orderItemSeq: number;
    productKey: number;
    productCode: string;
    productName: string;
    productDesc: string;
    product: IProduct;
    quantity: number;
    orderItemPrice: number;
    orderLineTotal: number;
    orderItemShipAddress: IAddress;
    orderItemBillAddress: IAddress;
    orderItemStatus: string;
    salesRepName: string;
    accountRepName: string;
}