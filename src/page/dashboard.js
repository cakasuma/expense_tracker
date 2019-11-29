import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActionButton, COLOR } from "react-native-material-ui";
import { connect } from "react-redux";
import { FETCH_EXPENSES } from "../utils/constants";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchExpenses();

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      // The screen is focused
      this.props.fetchExpenses();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  addNewExpense() {
    this.props.navigation.navigate("add_expense");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>cok</Text>
        <Text>
          {this.props.reducer.transactions
            ? this.props.reducer.transactions.length
            : "0"}
        </Text>
        <ActionButton
          style={{ container: { backgroundColor: COLOR.indigo500 } }}
          onPress={this.addNewExpense.bind(this)}
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 45,
    alignSelf: "center",
    letterSpacing: -0.02,
    color: "#000000"
  }
});

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch({ type: FETCH_EXPENSES })
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
