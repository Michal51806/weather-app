import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    cities: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const cityName = action.payload;
      const index = state.cities.indexOf(cityName);
      if (index > -1) {
        state.cities.splice(index, 1);
      } else {
        state.cities.push(cityName);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
