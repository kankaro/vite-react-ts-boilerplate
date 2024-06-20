import { describe, it } from 'vitest';

import reducer, { counterActions, selectCounter } from '../slice/counterSlice';

/**
 * Testing guide kindly refer to the url below
 * https://redux.js.org/recipes/testing
 * https://redux.js.org/recipes/writing-tests
 * Or if you prefer a video guide
 * https://egghead.io/lessons/jest-unit-testing-a-basic-redux-selector
 */

describe('counterSlice', () => {
  describe('reducers', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, { type: 'unknown' })).toEqual({ value: 0 });
    });

    it('should handle `increment` action reducer', () => {
      const previousState = { value: 0 };
      expect(reducer(previousState, counterActions.increment())).toEqual({
        value: 1,
      });
    });

    it('should handle `decrement` action reducer', () => {
      const previousState = { value: 2 };
      expect(reducer(previousState, counterActions.decrement())).toEqual({
        value: 1,
      });
    });
  });

  describe('selectors', () => {
    it('should return all initial values', () => {
      const state = { counter: { value: 0 } };
      const counterState = selectCounter(state);

      expect(counterState).toEqual(state.counter);
    });

    it('should increment/decrement the counter value', () => {
      // increment
      const previousState1 = { counter: { value: 2 } };
      const counterState1 = selectCounter(previousState1);
      expect(counterState1).toEqual(previousState1.counter);

      // decrement
      const previousState2 = { counter: { value: 1 } };
      const counterState2 = selectCounter(previousState2);
      expect(counterState2).toEqual(previousState2.counter);
    });
  });
});
