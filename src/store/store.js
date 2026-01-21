import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import favoritesReducer from './favoritesSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('weatherAppState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      settings: state.settings,
      favorites: state.favorites,
    });
    localStorage.setItem('weatherAppState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    favorites: favoritesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
