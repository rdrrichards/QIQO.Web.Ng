export interface IProduct {
  productKey: number;
  productCode: string;
  productType: string;
  productName: string;
  productDesc: string;
  productShortDesc: string;
  productLongDesc: string;
  productImagePath: string;
  productBasePrice: number;
  productBaseQuantity: number;
}

export class Product implements IProduct {
  constructor(
    public productKey: number,
    public productCode: string,
    public productType: string,
    public productName: string,
    public productDesc: string,
    public productShortDesc: string,
    public productLongDesc: string,
    public productImagePath: string,
    public productBasePrice: number,
    public productBaseQuantity: number
  ) { }
}
