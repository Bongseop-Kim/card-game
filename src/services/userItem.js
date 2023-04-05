import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  name: "",
  channel: "",
  position: "",
  win: 0,
  lose: 0,
  cards: [],
};

export const userSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setWin: (state, action) => {
      state.win = action.payload;
    },
    setLose: (state, action) => {
      state.lose = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { setLose, setWin, setId, setName, setEmail, setChannel, setCards, setPosition } = userSlice.actions;

export default userSlice.reducer;
