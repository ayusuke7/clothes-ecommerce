import { createSlice } from "@reduxjs/toolkit";
import session from "../../utils/session";

const initialState = {
  data: session.getUser(),
  info: null,
  message: null,
  loading: false,
  registed: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoginRequest: (state) => {
      state.loading = true;
    },
    setLoginResponse: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.registed = false;
    },
    getRegisterRequest: (state) => {
      state.loading = true;
    },
    setRegisterResponse: (state) => {
      state.loading = false;
      state.registed = true;
    },
    getInfoRequest: (state) => {
      state.loading = true;
    },
    setInfoResponse: (state, { payload }) => {
      state.info = payload;
      state.loading = false;
    },
    setLogout: (state) => {
      session.clear();
      state.data = null;
      state.info = null;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = usersSlice;

export const userActions = actions;

export default reducer;
