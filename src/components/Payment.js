import { useState } from "react";
import {
  setPrice,
  setCount,
  saleRemainder,
  setChangeBank,
  setResetPrice,
} from "../actions";
import { useDispatch } from "react-redux";
const issuanceClient = [];
export const Payment = ({ data }) => {
  const sumPrice = data?.price;

  const dispatch = useDispatch();
  const [infoDisp, setInfoDisp] = useState("");
  const [infoDispCash, setinfoDispCash] = useState("");
  const [AddCash, setAddCash] = useState("");
  const [change, setChange] = useState("");

  const productSelection = (number) => {
    const productPrice = data.products.find((product) => product.id === number); // Получили получили выбранный товар

    if (sumPrice && productPrice.price < sumPrice) {
      if (productPrice.remainder) {
        dispatch(setPrice(0 - productPrice.price));
        dispatch(setCount(productPrice.name));
        dispatch(
          saleRemainder(
            data.products.map((product) =>
              product.id === productPrice.id
                ? { ...product, remainder: product.remainder - 1 }
                : product
            )
          )
        );

        setInfoDisp("");
      } else {
        setInfoDisp("Товара нет в наличичи");
      }
    } else if (productPrice.price > sumPrice && sumPrice) {
      setAddCash("Добавьте денег");
    } else {
      setinfoDispCash(`Цена ${productPrice.price}`);
    }
  };
  const productPrice = (price) => {
    dispatch(setPrice(price));
    setAddCash("");
    setChange("");
  };
  const issuanceChange = (change) => {
    const newChangeBank = { ...data.changeBank };
    function sumTo(change) {
      if (change == 0) return;
      if (change >= 500 && newChangeBank[500]) {
        issuanceClient.push(500);
        newChangeBank[500] -= 1;
        sumTo(change - 500);
      } else if (change >= 100 && newChangeBank[100]) {
        issuanceClient.push(100);
        newChangeBank[100] -= 1;
        sumTo(change - 100);
      } else if (change >= 50 && newChangeBank[50]) {
        issuanceClient.push(50);
        newChangeBank[50] -= 1;
        sumTo(change - 50);
      } else if (change >= 10 && newChangeBank[10]) {
        issuanceClient.push(10);
        newChangeBank[10] -= 1;
        sumTo(change - 10);
      } else if (change >= 5 && newChangeBank[5]) {
        issuanceClient.push(5);
        newChangeBank[5] -= 1;
        sumTo(change - 5);
      } else if (change >= 1 && newChangeBank[1]) {
        issuanceClient.push(1);
        newChangeBank[1] -= 1;
        sumTo(change - 1);
      } else {
        const newProducts = data.products.map((item) => ({ ...item }));
        productsChange(change, newProducts);
        dispatch(saleRemainder(newProducts));
      }
    }
    function productsChange(change, products) {
      if (change == 0) return;
      if (change >= 90 && products[4].remainder) {
        issuanceClient.push(products[4].name);
        products[4].remainder -= 1;
        productsChange(change - 90, products);
      } else if (change >= 85 && products[1].remainder) {
        issuanceClient.push(products[1].name);
        products[1].remainder -= 1;
        productsChange(change - 85, products);
      } else if (change >= 60 && products[3].remainder) {
        issuanceClient.push(products[3].name);
        products[3].remainder -= 1;
        productsChange(change - 60, products);
      } else if (change >= 60 && products[7].remainder) {
        issuanceClient.push(products[7].name);
        products[7].remainder -= 1;
        productsChange(change - 60, products);
      } else if (change >= 58 && products[0].remainder) {
        issuanceClient.push(products[0].name);
        products[0].remainder -= 1;
        productsChange(change - 58, products);
      } else if (change >= 58 && products[6].remainder) {
        issuanceClient.push(products[6].name);
        products[6].remainder -= 1;
        productsChange(change - 58, products);
      } else if (change >= 50 && products[2].remainder) {
        issuanceClient.push(products[2].name);
        products[2].remainder -= 1;
        productsChange(change - 50, products);
      } else if (change >= 30 && products[5].remainder) {
        issuanceClient.push(products[5].name);
        products[5].remainder -= 1;
        productsChange(change - 30, products);
      } else {
        alert(
          `Извините не смогли выдать вам ${change}. Обратитесь в поддержку`
        );
      }
    }
    setChange(change);
    sumTo(change);
    dispatch(setChangeBank(newChangeBank));
    dispatch(setCount(""));
    dispatch(setPrice());
    dispatch(setResetPrice(0));
  };
  const buttonLabel = [1, 2, 3, 4, 5, 6, 7, 8];

  const button = buttonLabel.map((btn, index) => {
    return (
      <button key={`${index}kbdsvs`} onClick={() => productSelection(btn)}>
        {btn}
      </button>
    );
  });

  const buttonPrice = [50, 100, 500, 1000];

  const price = buttonPrice.map((btn, index) => {
    return (
      <button key={`${index}kbdsvsvss`} onClick={() => productPrice(btn)}>
        {btn}
      </button>
    );
  });
  return (
    <>
      <div>
        {sumPrice > 1 ? `${sumPrice} р. Выберите товар ` : "Вставьте купюру:"}
      </div>
      <div>{infoDisp ? infoDisp : ""}</div>
      <div>{infoDispCash && !sumPrice ? infoDispCash : ""}</div>
      <div>{AddCash ? AddCash : ""}</div>
      <div className="wrapper_button">{price}</div>
      <div className="wrapper_button">{button}</div>
      <button onClick={() => issuanceChange(sumPrice)}>Выдать сдачу</button>
      <div className="change">
        {change > 0
          ? `Ваша сдача ${change} р. Деньги номиналом: ${issuanceClient}`
          : ""}
      </div>
    </>
  );
};
