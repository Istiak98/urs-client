import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVersity = createAsyncThunk(
  "versity/getVersity",
  async (term) => {
    return fetch(`versityData.json`).then((res) =>
      res.json()
    );
  }
);
export const versitySlice = createSlice({
  name: "versity",
  initialState: {
    versity: [],
    loading: false,
  },
  extraReducers: {
    [getVersity.pending]: (state, action) => {
      state.loading = true;
    },
    [getVersity.fulfilled]: (state, action) => {
      state.loading = false;
      state.versity = action.payload;
    },
    [getVersity.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});