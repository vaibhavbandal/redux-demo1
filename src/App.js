import { combineReducers, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App2 from "./App2";
import counterReducer from "./Reducers/counterReducer";
import numberReducer from "./Reducers/numberReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    number: numberReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <h3>Practicing Redux</h3>
        <App2 />
      </Provider>
    </>
  );
}
