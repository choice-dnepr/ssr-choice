import { Component } from '@angular/core';
import clsx from 'clsx';
import * as MobileDetect from 'mobile-detect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isPhone = mobileDetect.phone();
    const isTablet = mobileDetect.tablet();
    const initialClasses = clsx({
      'is-pc': !isPhone && !isTablet,
      'is-tablet': isTablet,
      'is-phone': isPhone
    });
    document.documentElement.classList.add(initialClasses);
  }
}
