import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    temperatureUnit: 'celsius', // celsius, fahrenheit, kelvin
  },
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
  },
});

export const { setTemperatureUnit } = settingsSlice.actions;
export default settingsSlice.reducer;
