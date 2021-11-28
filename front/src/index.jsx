import { Provider } from "react-redux";
import { createStore } from "redux";

import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/presentation";
import DayjsUtils from "@date-io/dayjs"
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

const store=createStore(rootReducer);

dayjs.locale("ja");

const App = () => (
  //storeの情報をProviderを使用して参照可能にする
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
