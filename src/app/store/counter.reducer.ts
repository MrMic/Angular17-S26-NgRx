import { Action, createReducer, on } from '@ngrx/store';

// import { CounterActions, INCREMENT, IncrementAction } from './counter.actions';
import { decrement, increment } from './counter.actions';

const initialState = 0;

// NOTE: ══════════════════════════ 1. First SOLUTION ══════════════════════════
// NOTE: The way to go
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
);

// NOTE: ══════════════════════════ 2. Second SOLUTION ══════════════════════════
// NOTE: Alternative
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action,
// ) {
//   // if (action.type === '[Counter] Increment') {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
