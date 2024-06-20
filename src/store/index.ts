import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

// Returns the created store instance.
export const store = configureStore({
  reducer: rootReducer,
});

/**
 * This is for a unit testing a component.
 * @param preloadedState Initial state. Optional
 */
export const createStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// This is also used for unit testing purpose
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
