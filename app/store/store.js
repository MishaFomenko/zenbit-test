import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import listReducer from "./slices/listSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    list: listReducer,
  },
});

export default store;
