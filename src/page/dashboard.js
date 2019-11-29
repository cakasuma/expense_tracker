import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActionButton, COLOR } from "react-native-material-ui";

const Dashboard = ({ navigation }) => {
  useState(() => {
    console.log("mounted");
  }, []);

  const addNewExpense = () => {
    navigation.navigate("add_expense");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Dashboard</Text>
      <ActionButton
        style={{ container: { backgroundColor: COLOR.indigo500 } }}
        onPress={addNewExpense}
      />
    </View>
  );
};

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

export default Dashboard;
