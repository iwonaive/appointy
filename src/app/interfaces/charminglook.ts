export interface Charminglook {
  mainData: Address;
  treatments: Treatment[];
}

export interface Address {
  name: string;
  address: string;
  rating: number;
}

export interface Treatment {
  price: number;
  name: string;
  duration: number;
  description: string;
  canBook: boolean;
  beauticians: BeauticianInterface[];
}

export interface BeauticianInterface {
  name: string;
}
