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
        name: 'Marta CHOICE'
      },
      {
        name: 'Магазин'
      },
      {
        name: 'О компании'
      },
      {
        name: 'О продукции'
      },
      {
        name: 'Стать партнером'
      },
      {
        name: 'Команда'
      },
      {
        name: 'Контакты'
      }
    ]);
  }

  getHeaderItems(): Observable<any> {
    return this.headerItems.asObservable();
  }

}