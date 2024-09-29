import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetWeather = createAsyncThunk(
  "GetWeather",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      var { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=8d348a62ee12b2bb05648ea0a4a52078`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(GetWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetWeather.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(GetWeather.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
