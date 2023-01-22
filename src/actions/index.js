import {
  SET_PRICE,
  SET_COUNT,
  SET_REMAINDER,
  SET_RESETPRICE,
  SET_CHANGEBANK,
} from "../reduser";

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});
export const setResetPrice = (price) => ({
  type: SET_RESETPRICE,
  payload: price,
});

export const setCount = (saleProduct) => ({
  type: SET_COUNT,
  payload: saleProduct,
});
export const setChangeBank = (changeBank) => ({
  type: SET_CHANGEBANK,
  payload: changeBank,
});

export const saleRemainder = (saleRemainder) => ({
  type: SET_REMAINDER,
  payload: saleRemainder,
});
