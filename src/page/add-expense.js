import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { Button, COLOR } from "react-native-material-ui";
import * as yup from "yup";
import { Formik } from "formik";
import uuid from "uuid/v1";
import AwesomeAlert from "react-native-awesome-alerts";
import { TextField } from "react-native-material-textfield";
import { Dropdown } from "react-native-material-dropdown";
import { ADD_EXPENSE } from "../utils/constants";

const validation_schema = yup.object().shape({
  description: yup.string().required(),
  category: yup.string().required(),
  type: yup.string().required(),
  amount: yup
    .number()
    .required()
    .positive()
    .integer()
});

const category_list = [
  {
    value: "Expense"
  }
];

const type_list = [
  {
    value: "Food"
  },
  {
    value: "Transportation"
  },
  {
    value: "Social Life"
  },
  {
    value: "Household"
  },
  {
    value: "Health"
  },
  {
    value: "Gift"
  },
  {
    value: "Education"
  },
  {
    value: "Other"
  }
];
/*
- id
- description
- category [expense, income]
- type [Food, transportation, social life, household, health, gift, education, other]
- amount
*/
const AddExpense = ({ addNewExpense, navigation }) => {
  const [show_alert, setShowAlert] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please add your expenses</Text>
      <Formik
        initialValues={{ description: "", category: "", type: "", amount: "" }}
        validationSchema={validation_schema}
        onSubmit={(values, { setSubmitting }) => {
          const data = {
            uid: uuid(),
            ...values,
            date: new Date().toString()
          };
          addNewExpense(data);
          setSubmitting(false);
          setShowAlert(true);
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors
        }) => (
          <View>
            <TextField
              label="Description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              error={errors.description}
              value={values.description}
              containerStyle={styles.inputContainer}
            />
            <Dropdown
              label="Category"
              error={errors.category}
              data={category_list}
              onChangeText={e => setFieldValue("category", e)}
              dropdownOffset={{ top: 10 }}
              drop
              containerStyle={styles.inputContainer}
            />
            <Dropdown
              label="Type"
              error={errors.type}
              data={type_list}
              onChangeText={e => setFieldValue("type", e)}
              dropdownOffset={{ top: 10 }}
              containerStyle={styles.inputContainer}
            />
            <TextField
              label="Amount"
              onChangeText={handleChange("amount")}
              onBlur={handleBlur("amount")}
              error={errors.amount}
              value={values.amount}
              containerStyle={styles.inputContainer}
            />
            <Button
              onPress={handleSubmit}
              accent
              disabled={isSubmitting}
              text="Add"
              style={{
                container: styles.buttonContainer,
                text: styles.buttonText
              }}
            />
          </View>
        )}
      </Formik>
      <AwesomeAlert
        show={show_alert}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton
        confirmText="To dashboard"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          navigation.navigate("dashboard");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15
  },
  buttonContainer: {
    backgroundColor: COLOR.indigo500,
    marginTop: 20,
    borderRadius: 16
  },
  buttonText: {
    color: COLOR.white,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20
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
  addNewExpense: new_transactions =>
    dispatch({ type: ADD_EXPENSE, new_transactions })
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
