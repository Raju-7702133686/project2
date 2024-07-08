export interface student {
    name: string;
    gender: boolean;
    mobile: string;
    email: string;
    bactch: string;
    address: Address;
    education: Education[];
    company: Company;
}
export interface Address {
    city: string;
    mandal: string;
    district: string;
    state: string;
    pincode: number;
}
export interface Education{
    qualification: string;
    year: number;
    percentage: number;
}
export interface Company{
    name: string;
    location: string;
    package: string;
    offerDate: string;
}

