import { RouterReducerState } from "@ngrx/router-store";

export interface ShipBrewState {
  router: RouterReducerState
  shared: SharedReducerState;
}

export interface SharedReducerState {
  loading: boolean;
}