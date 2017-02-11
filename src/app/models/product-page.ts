import { IProduct } from './product';

export interface IProductPage{
    totalCount: number;
    totalPages: number;
    currentPage: number;
    prevPageUrl: string;
    nextPageUrl: string;
    category: string;
    orderBy: string;
    pageSize: number;
    results: IProduct[];
}

export class ProductPage implements IProductPage{
    constructor (
        public totalCount: number,
        public totalPages: number,
        public currentPage: number,
        public prevPageUrl: string,
        public nextPageUrl: string,
        public category: string,
        public orderBy: string,
        public pageSize: number,
        public results: IProduct[]
    ) {}
}