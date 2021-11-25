import { Provider } from "react-redux";
import { createStore } from "redux";

import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/presentation";

const store=createStore(rootReducer);

dayjs.locale("ja");

const App = () => (
    //storeの情報をProviderを使用して参照可能にする
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
