import React from "react";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./store/expense-store";

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
