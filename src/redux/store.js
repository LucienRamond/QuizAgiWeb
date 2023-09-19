import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/quiz";

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
