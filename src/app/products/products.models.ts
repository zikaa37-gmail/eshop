import { Valuta } from "./products.enums";

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  active: boolean;
}

export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
  active: boolean;
}

export interface ProductGroup {
  id: number;
  subcategoryId: number;
  name: string;
  active: boolean;
}

export interface Product {
  id: number;
  categoryId: number;
  categoryName: string;
  subcategoryId: number;
  subcategoryName: string;
  groupId: number;
  groupName: string;
  manufacturer: Manufacturer;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  barcode: string;
  size?: string;
  color?: string;
  price: number;
  published: Date;
  keywords?: string[];
  active: boolean;
}

export interface Manufacturer {
  id: string;//number;
  name: string;
  address: Address[];
  logoUrl: string;
  email: string;
  phone: string;
  country: string;
  accountNumber: string;
  active: boolean;
}

export interface Customer {
  id: string;// number;
  firstName: string;
  lastName: string;
  addresses: Address[];
  email: string;
  phone: string;
  birthDate: Date;
  creditCards: CreditCard[];
  imageUrl: string; //IImage;
  // username: string;
  password: string;
  registeredAt: Date;
  active: boolean;
}

export interface Size {
  id: number;
  name: string;
  active: boolean;
}

export interface Color {
  id: number;
  name: string;
  active: boolean;
}

export interface Address {
  id: string;
  country: string;
  state: string;
  street: string;
  streetNumber: string;
  city: string;
  zipCode: string;
  active: boolean;
}

export interface OrderItem {
  id?: number;
  customerId: number;
  product: Product;
  // name: string;
  // barcode: string;
  orderDate: Date;
  // price: number;
  qty: number;
}

export interface Order {
  items: Product[];
  total: number;
  orderDate: Date;
  valuta: Valuta;
  paid: boolean;
}

export interface CreditCard {
  cardNumber: string;
  customerId: string;// number;
  cardIssuer: string;
  type: string; //CreditCard;
  expirationMonth: string;
  expirationYear: string;
  ccv: string;
  active: boolean;
}

export interface Discount {
  id: number;
  discountValue: number;
  activeFrom: Date;
  activeTo: Date;
  items: Product[];
}

export interface Rate {
  productId: number;
  rateValue: number;
  cusotmerId: number;
  rateDate: Date;
}


export interface User {
  userId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
}

export interface SearchParams {
  q?: string;
  _start?: number;//1//&
  _end?: number;//3,
  _limit?: number; // 10
  _sort?: string[]; //['user','views'],//&
  _order?: string[];//['desc','asc']
  _lte?: number; //10
  _gte?: number; //10
  _like?: string; // Add _like to filter (RegExp supported)   ?title_like=server
  _ne?: string; // /posts?id_ne=1
  _embed?: string; // To include children resources, add ?_embed=comments
  _expand?: string; // To include parent resource, add _expand=post
}


