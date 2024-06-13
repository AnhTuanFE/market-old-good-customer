export interface ILogin {
  email: string;
  password: string;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  token: string;
  createAt: any;
  city: string;
  district: string;
  ward: string;
  address: string;
  image: string;
  disable: boolean;
  address_shop: {
    city: string;
    district: string;
    ward: string;
    address: string;
    phone: string;
  };
}

export type UserRegister = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
