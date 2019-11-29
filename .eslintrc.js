module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    camelcase: "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off"
  },
  globals: {
    fetch: false
  }
};
