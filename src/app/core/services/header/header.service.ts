import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class HeaderService {
  private headerItems: BehaviorSubject<any>;
  
  constructor() {
    this.headerItems = new BehaviorSubject([
      {
        name: 'Магазин'
      },
      {
        name: 'Сотрудничество'
      },
      {
        name: 'О компании'
      },
      {
        name: 'О продукции'
      }
    ]);
  }

  getHeaderItems(): Observable<any> {
    return this.headerItems.asObservable();
  }

}