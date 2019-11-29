<h1 align="center">
  Minimal Expense Tracker
</h1>

## Requirements

- node
- npm
- react-native CLI
- metro

## Editor helpers

- Prettier setup in your editor https://prettier.io/
- Eslint setup in your editor https://eslint.org/

## 🚀 Quick start

1.  **Install your dependencies:**

    ```sh
    npm ci
    ```

2.  **To run the app:**

    ```sh
    npm run android
    ```

3.  **To run the app on ios:**

    ```sh
    npm run ios
    ```

## File Structure

```
src
    ├── page/
    │   └── add-expense.js
    │   └── dashboard.js
    │   └── expense-details.js // TODO
    │   └── expense-list.js
    ├── reducers/
    │   ├── main-reducer.js
    │   ├── index.js
    ├── sagas/
    │   ├── add-expense-saga.js
    │   ├── fetch-expense-saga.js
    │   ├── index.js
    ├── store/
    │   └── expense-store.js
    ├── utils/
    │   ├── constants.js
    │   ├── ...
    ├── index.js

index.js // publish file
webpack.config.js
package.json
```

## Plan

bottom navigation

- navigation bottom drawer
  -- expense list
  -- dashboard

- dashboard
  -- balance
  -- total expense based on type in chart format
  -- plus button to add new expense

- expense list
  -- search
  -- list out all expense based on recent date
  -- if can, do pagination

- expense details
  -- show details of expense

add-expense
-- adding new expense

account

- name
- balance

expense properties

- id
- description
- category [expense, income]
- type [Food, transportation, social life, household, health, gift, education, other]
- amount
