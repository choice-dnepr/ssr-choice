import { Injectable } from '@angular/core';
import { NavigationItem } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class HeaderService {
  private headerItems: BehaviorSubject<NavigationItem[]>;
  
  constructor() {
    this.headerItems = new BehaviorSubject([
      {
        name: 'Магазин',
        path: 'store',
        children: [
          {
            name: 'white mandarin',
            path: 'store',
          },
          {
            name: 'choice',
            path: '/home',
          },
          {
            name: 'biox',
            path: '/home',
          }
        ]
      },
      {
        name: 'Сотрудничество',
        path: '/home'
      },
      {
        name: 'О компании',
        path: '/home'
      },
      {
        name: 'О продукции',
        path: '/home'
      }
    ] as NavigationItem[]);
  }

  getHeaderItems(): Observable<NavigationItem[]> {
    return this.headerItems.asObservable();
  }

}