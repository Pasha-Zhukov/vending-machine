import { Product } from "./components/Product";
import { Payment } from "./components/Payment";
import { useSelector } from "react-redux";
import { mainData } from "./type";
import "./App.css";

const App = () => {
  const data = useSelector((state: mainData) => state);

  return (
    <div className="container">
      <div className="wrapper_left">
        <div className="behindGlass">
          <Product data={data.products} />
        </div>
        <div className="delivery">
          {data.saleProduct
            ? `Заберите свой ${data.saleProduct}`
            : "Выдача товара"}
        </div>
      </div>
      <div className="wrapper_right">
        <div className="input_money">
          <Payment data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
