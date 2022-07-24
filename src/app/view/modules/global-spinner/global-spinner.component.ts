import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { loadingAction } from '@store/actions/shared.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss']
})
export class GlobalSpinnerComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public spinnerActiveState: boolean = true;

  constructor(
    private readonly actions$: Actions
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.actions$.pipe(ofType(loadingAction)).subscribe(({ loading }) => {
        setTimeout(() => {
          this.spinnerActiveState = loading;
        }, 3000);
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
