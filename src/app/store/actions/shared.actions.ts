import { createAction, props } from '@ngrx/store';

export const LOADING_ACTION = '[Loading Page] Loading is active';

export const loadingAction = createAction(
  LOADING_ACTION,
  props<{ loading: boolean }>()
);