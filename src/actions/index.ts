import {
  SET_PRICE,
  SET_COUNT,
  SET_REMAINDER,
  SET_RESETPRICE,
  SET_CHANGEBANK,
} from "../reduser";
import { actionTypes } from "../type";

export const setPrice = (price: number): actionTypes => ({
  type: SET_PRICE,
  payload: price,
});
export const setResetPrice = (price: number[]): actionTypes => ({
  type: SET_RESETPRICE,
  payload: price,
});
export const setCount = (saleProduct: string): actionTypes => ({
  type: SET_COUNT,
  payload: saleProduct,
});
export const setChangeBank = (changeBank: any): actionTypes => ({
  type: SET_CHANGEBANK,
  payload: changeBank,
});

export const saleRemainder = (saleRemainder: any): actionTypes => ({
  type: SET_REMAINDER,
  payload: saleRemainder,
});
