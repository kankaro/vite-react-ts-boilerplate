import { useCounterActionsDispatcher } from './counter.actions';
import { useCounterSelector } from './counter.selector';
import counterReducer from './counter.slice';
import { counterState } from './counter.state';

export { counterReducer, counterState, useCounterActionsDispatcher, useCounterSelector };
