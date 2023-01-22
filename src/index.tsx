import ReactDOM from "react-dom/client";
import reducer from "./reduser";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
