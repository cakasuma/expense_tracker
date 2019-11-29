import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { ActionButton, COLOR, ListItem } from "react-native-material-ui";
import { connect } from "react-redux";
import { FETCH_EXPENSES } from "../utils/constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   loading: false,
    //   data: [],
    //   error: null
    // };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.getExpense();

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      // The screen is focused
      this.getExpense();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  async getExpense() {
    const response = await this.props.fetchExpenses();

    console.log("hiii");
    console.log(response);
  }

  addNewExpense() {
    this.props.navigation.navigate("add_expense");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>List of transactions</Text>
        <ScrollView>
          {this.props.reducer.transactions &&
          this.props.reducer.transactions.length > 0
            ? this.props.reducer.transactions.map(transaction => (
                // eslint-disable-next-line react/jsx-indent
                <ListItem
                  divider
                  leftElement="person"
                  centerElement={{
                    primaryText: transaction.description,
                    secondaryText: transaction.category,
                    tertiaryText: transaction.type
                  }}
                  rightElement={<Text>{transaction.amount}</Text>}
                />
              ))
            : null}
        </ScrollView>
        <ActionButton
          style={{ container: { backgroundColor: COLOR.indigo500 } }}
          onPress={this.addNewExpense.bind(this)}
        />
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: "100%"
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 45,
    textAlign: "center",
    alignSelf: "center",
    letterSpacing: -0.02,
    color: "#0e0e0e",
    marginBottom: 20
  }
});

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch({ type: FETCH_EXPENSES })
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
