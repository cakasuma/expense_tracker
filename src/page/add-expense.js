import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, COLOR } from "react-native-material-ui";
import * as yup from "yup";
import { Formik } from "formik";
import { OutlinedTextField } from "react-native-material-textfield";
import { Dropdown } from "react-native-material-dropdown";

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
  },
  {
    value: "Income"
  }
];
/*
- id
- description
- category [expense, income]
- type [Food, transportation, social life, household, health, gift, education, other]
- amount
*/
const AddExpense = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Please add your expenses</Text>
    <Formik
      initialValues={{ description: "", category: "", type: "", amount: "" }}
      validationSchema={validation_schema}
      onSubmit={(values, { setSubmitting, errors }) => {
        console.log(values);
        console.log(errors);
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
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
          <OutlinedTextField
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
            onChangeText={e => {
              console.log(e);
              setFieldValue("category", e);
            }}
            dropdownOffset={{ top: 0 }}
            containerStyle={styles.inputContainer}
          />
          <OutlinedTextField
            label="Type"
            onChangeText={handleChange("type")}
            onBlur={handleBlur("type")}
            error={errors.type}
            value={values.type}
            containerStyle={styles.inputContainer}
          />
          <OutlinedTextField
            label="Amount"
            onChangeText={handleChange("amount")}
            onBlur={handleBlur("amount")}
            error={errors.amount}
            value={values.amount}
            containerStyle={styles.inputContainer}
          />
          <Button
            onPress={handleSubmit}
            disabled={isSubmitting}
            accent
            text="Add"
            style={{
              container: styles.buttonContainer,
              text: styles.buttonText
            }}
          />
        </View>
      )}
    </Formik>
  </View>
);

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

export default AddExpense;
