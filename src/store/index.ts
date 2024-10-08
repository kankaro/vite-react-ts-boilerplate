import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

// Returns the created store instance.
export const store = configureStore({
  reducer: rootReducer,
});

export const createStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
