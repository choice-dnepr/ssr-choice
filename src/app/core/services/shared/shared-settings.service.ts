import { Injectable } from '@angular/core';
import { SharedReducerState, ShipBrewState } from '@core/models/store';
import { Store } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { loadingAction } from '@store/actions/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class SharedSettingsService {

  constructor(private readonly store: Store<ShipBrewState>) {}

  private selectSharedState(state: ShipBrewState): SharedReducerState {
    return state?.shared;
  }

  
  public getGlobalSpinnerState() {
    return createSelector(
      this.selectSharedState,
      (state: SharedReducerState) => state.loading)
  }

  public switchOFFGlobalSpinner(): void {
    this.store.dispatch(loadingAction({ loading: false }));
  }

}