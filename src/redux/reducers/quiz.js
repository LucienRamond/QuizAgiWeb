import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    page: 0,
    regime: "",
    restauration: [],
    dishStyle: [],
    preferences: "",
    hated: "",
  },

  reducers: {
    pageIncrement: (state) => {
      state.page += 1;
    },
    pageDecrement: (state) => {
      state.page -= 1;
    },
    regimeUpdate: (state, action) => {
      state.regime = action.payload;
    },
    restaurationAdd: (state, action) => {
      state.restauration.push(action.payload);
    },
    restaurationRemove: (state, action) => {
      state.restauration.splice(action.payload, 1);
    },
    dishStyleAdd: (state, action) => {
      state.dishStyle.push(action.payload);
    },
    dishStyleRemove: (state, action) => {
      state.dishStyle.splice(action.payload, 1);
    },
    preferencesUpdate: (state, action) => {
      state.preferences = action.payload;
    },
    hatedUpdate: (state, action) => {
      state.hated = action.payload;
    },
  },
});

export const {
  pageIncrement,
  pageDecrement,
  regimeUpdate,
  restaurationAdd,
  restaurationRemove,
  dishStyleAdd,
  dishStyleRemove,
  hatedUpdate,
  preferencesUpdate,
} = quizSlice.actions;

export const page = (state) => state.quiz.page;
export const regime = (state) => state.quiz.regime;
export const restauration = (state) => state.quiz.restauration;
export const dishStyle = (state) => state.quiz.dishStyle;
export const preferences = (state) => state.quiz.preferences;
export const hated = (state) => state.quiz.hated;

export default quizSlice.reducer;
