export interface IAddress{
    addressKey: number;
    addressType: string;
    entityKey: number;
    entityType: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressCity: string;
    addressState: string;
    addressPostal: string;
    addressCounty: string;
    addressCountry: string;
    addressNotes: string;
    addressDefaultFlag: boolean;
}

export interface IAddressPostal{
    countryName: string;
    postalCode: string;
    stateCode: string;
    stateFullName: string;
    cityName: string;
    countyName: string;
    timeZone: number;
}