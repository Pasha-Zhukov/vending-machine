import {
  SET_PRICE,
  SET_COUNT,
  SET_REMAINDER,
  SET_RESETPRICE,
  SET_CHANGEBANK,
} from "../src/reduser";

export interface mainData {
  products: dataProducts[];
  price: number;
  saleProduct: string;
  change: [];
  changeBank: {
    500: number;
    100: number;
    50: number;
    10: number;
    5: number;
    1: number;
  };
}

interface dataProducts {
  name: string;
  price: number;
  remainder: number;
  id: number;
}

interface price {
  type: typeof SET_PRICE;
  payload: number;
}
interface resetPrice {
  type: typeof SET_RESETPRICE;
  payload: number[];
}
interface count {
  type: typeof SET_COUNT;
  payload: string;
}
interface changeBank {
  type: typeof SET_CHANGEBANK;
  payload: number[];
}
interface remainder {
  type: typeof SET_REMAINDER;
  payload: dataProducts;
}

export type actionTypes = price | resetPrice | count | changeBank | remainder;
