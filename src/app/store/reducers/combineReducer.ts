import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { ShipBrewState } from "src/app/core/models";
import { reducer as sharedReducer } from "./shared.reducer";

export const combineReducers: ActionReducerMap<ShipBrewState> = {
  router: routerReducer,
  shared: sharedReducer
}