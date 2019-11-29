import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// You will see warning of SafeView ComponentWillRecieveProps
// its under development here https://github.com/callstack/react-native-paper/issues/1353
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { COLOR } from "react-native-material-ui";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Dashboard from "./page/dashboard";
import AddExpense from "./page/add-expense";
import expenseList from "./page/expense-list";
import expenseDetails from "./page/expense-details";

const BottomNavigator = createMaterialBottomTabNavigator(
  {
    dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-home" />
          </View>
        )
      }
    },
    expense_list: {
      screen: expenseList,
      navigationOptions: {
        tabBarLabel: "Expense List",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-list" />
          </View>
        )
      }
    }
  },
  {
    initialRouteName: "dashboard",
    activeColor: COLOR.white,
    shifting: false,
    inactiveColor: COLOR.pink200,
    barStyle: { backgroundColor: COLOR.pink600 },
    headerMode: "none"
  }
);

const RootStack = createStackNavigator({
  ChildMainNav: {
    screen: BottomNavigator,
    navigationOptions: {
      header: null
    }
  },
  add_expense: {
    screen: AddExpense
  },
  expense_details: {
    screen: expenseDetails,
    navigationOptions: {
      tabBarVisible: false
    }
  }
});

const App = createAppContainer(RootStack);

export default App;
