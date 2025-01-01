// authReducer.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", role: "" }, // Añadir el rol
  reducers: {
    saveToken(state, action) {
      state.token = action.payload.token;
    },
    saveRole(state, action) {
      state.role = action.payload.role; // Guardar el rol
    },
    removeToken(state) {
      state.token = ""; // Limpiar el token
      state.role = ""; // Limpiar el rol
    },
  },
});

const { actions, reducer } = authSlice;
export const { saveToken, saveRole, removeToken } = actions;
export default reducer;
