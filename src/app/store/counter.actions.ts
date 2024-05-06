import { createAction, props } from '@ngrx/store';

// NOTE: ══════════════════════════ 1. First SOLUTION ══════════════════════════
export const increment = createAction(
  '[Counter] Increment',
  props<{
    value: number;
  }>(),
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{
    value: number;
  }>(),
);

// NOTE: ══════════════════════════ 2. Second SOLUTION ══════════════════════════
// export const INCREMENT = '[Counter] Increment';

// ______________________________________________________________________
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;
//
//   constructor(public value: number) { }
// }
//
// export type CounterActions = IncrementAction;
