import React from "react";
import { createStore, applyMiddleware } from "redux";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducer from "./reducers";
import Navigation from "./navigation";

const store = createStore(reducer, applyMiddleware(logger));

const uiTheme = {
  palette: {
    primaryColor: COLOR.pink600,
    secondaryColor: COLOR.indigo500
  }
  // toolbar: {
  //   container: {
  //     height: 50,
  //   },
  // },
};

const App = () => (
  <Provider store={store}>
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <Navigation />
    </ThemeContext.Provider>
  </Provider>
);

export default App;
