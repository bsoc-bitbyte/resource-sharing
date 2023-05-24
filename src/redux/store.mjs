import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers.mjs";

export default configureStore({
    reducer: rootReducer,
});
