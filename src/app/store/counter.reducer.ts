import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 0;

// NOTE: The way to go
// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value),
// );

// NOTE: Alternative
export function counterReducer(state = initialState, action: any) {
  if (action.type === '[Counter] Increment') {
    return state + action.value;
  }
  return state;
}
