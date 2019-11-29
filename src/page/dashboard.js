import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ActionButton, COLOR } from "react-native-material-ui";
import { connect } from "react-redux";
// import PieChart from "react-minimal-pie-chart";
import { FETCH_EXPENSES } from "../utils/constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pie_data: []
    };
  }

  componentDidMount() {
    this.props.fetchExpenses();

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      // The screen is focused
      this.props.fetchExpenses();
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.reducer.transactions.length !==
      this.props.reducer.transactions.length
    ) {
      let food = 0;
      let social = 0;
      let household = 0;
      let health = 0;
      let gift = 0;
      let education = 0;
      let others = 0;
      if (
        this.props.reducer.transactions &&
        this.props.reducer.transactions.length > 0
      ) {
        this.props.reducer.transactions.forEach(transaction => {
          if (transaction.type === "Food") food += parseInt(transaction.amount);
          if (transaction.type === "Social Life")
            social += parseInt(transaction.amount);
          if (transaction.type === "Household")
            household += parseInt(transaction.amount);
          if (transaction.type === "Health")
            health += parseInt(transaction.amount);
          if (transaction.type === "Gift") gift += parseInt(transaction.amount);
          if (transaction.type === "Education")
            education += parseInt(transaction.amount);
          if (transaction.type === "Others")
            others += parseInt(transaction.amount);
        });
      }

      const pie_data_filtered = [
        {
          title: "Food",
          value: food,
          color: "#64b5f6"
        },
        {
          title: "Social Life",
          value: social,
          color: "#5e35b1"
        },
        {
          title: "Household",
          value: household,
          color: "red"
        },
        {
          title: "Health",
          value: health,
          color: "#43a047"
        },
        {
          title: "Gift",
          value: gift,
          color: "#81d4fa"
        },
        {
          title: "Education",
          value: education,
          color: "#ff5722"
        },
        {
          title: "Others",
          value: others,
          color: "#9e9e9e"
        }
      ];

      /* eslint-disable-next-line react/no-did-update-set-state  */
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        pie_data: pie_data_filtered
      });
    }
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
      <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
        {/* TODO: Add Pie chart  */}
        {this.state.pie_data.length > 0 &&
          this.state.pie_data.map(pie => (
            <View>
              <Text>{`${pie.title}: MYR ${pie.value}`}</Text>
            </View>
          ))}
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
