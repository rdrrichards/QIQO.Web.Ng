import { IAddress } from './address';
import { IEntityAttribute } from './entityattribute';

export interface IAccount {
    accountKey: number;
    accountCode: string;
    accountName: string;
    accountDesc: string;
    accountDBA: string;
    accountStartDate: Date;
    accountEndDate: Date;
    addresses: IAddress[];
    attributes: IEntityAttribute[];
    employees: IAccountPerson[];
}

export interface IFeeSchedule{
    feeScheduleKey: number;
    // companyKey: number;
    accountKey: number;
    productKey: number;
    feeScheduleStartDate: Date;
    feeScheduleEndDate: Date;
    feeScheduleTypeCode: string;
    feeScheduleValue: number;
    productDesc: string;
    productCode: string;
}

export interface IAccountPerson {
    roleInCompany: string;
    entityPersonKey: number;
    startDate: Date;
    endDate: Date;
    comment: string;
    companyRoleType: string;
    personKey: number;
    personCode: string;
    personFirstName: string;
    personMI: string;
    personLastName: string;
}