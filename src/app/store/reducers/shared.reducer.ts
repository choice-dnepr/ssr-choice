import { Action, createReducer, on } from "@ngrx/store";
import { SharedReducerState, ShipBrewState } from "src/app/core/models";
import { loadingAction } from "../actions/shared.actions";

export const initialState: SharedReducerState = {
  loading: false
};

const sharedReducer = createReducer(
  initialState,
  on(loadingAction, state => ({ ...state, loading: true }))
);

export function reducer(state: SharedReducerState | undefined, action: Action) {
  return sharedReducer(state, action);
}