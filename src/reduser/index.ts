import { mainData } from "../type";

const initialState: mainData = {
  products: [
    { name: "Кит Кат", price: 58, remainder: 3, id: 1 },
    { name: "Snickers", price: 85, remainder: 5, id: 2 },
    { name: "Nuts Duo", price: 50, remainder: 1, id: 3 },
    { name: "Kinder Bueno", price: 60, remainder: 1, id: 4 },
    { name: "Niederegger", price: 90, remainder: 0, id: 5 },
    { name: "GoodMix", price: 30, remainder: 8, id: 6 },
    { name: "Mars", price: 58, remainder: 2, id: 7 },
    { name: "Twix", price: 60, remainder: 7, id: 8 },
  ],
  price: 0,
  saleProduct: "",
  change: [],
  changeBank: {
    500: 3,
    100: 6,
    50: 4,
    10: 9,
    5: 20,
    1: 15,
  },
};

export const SET_PRICE = "SET_PRICE";
export const SET_COUNT = "SET_COUNT";
export const SET_REMAINDER = "SET_REMAINDER";
export const SET_CHANGEBANK = "SET_CHANGEBANK";
export const SET_RESETPRICE = "SET_RESETPRICE";

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        saleProduct: action.payload,
      };
    case SET_REMAINDER:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CHANGEBANK:
      return {
        ...state,
        changeBank: action.payload,
      };

    case SET_PRICE:
      return {
        ...state,
        price: +state.price + +action.payload,
      };
    case SET_RESETPRICE:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
