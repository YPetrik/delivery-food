import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export interface IUserState {
  jwt: string | null;
}

export interface IUserPersistentState {
  jwt: string | null;
}

export const JWT_PERSISTENT_STATE = "userData";

const initialState: IUserState = {
  jwt: loadState<IUserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = "null";
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
