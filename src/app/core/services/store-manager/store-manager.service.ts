import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreManagerApiService } from './store-manager.api.service';

@Injectable({
  providedIn: 'any',
})
export class StoreManagerService {
  
  constructor(
    private readonly storeManagerAPI: StoreManagerApiService
  ) {}

  addProduct(product: any): Observable<any> {
    return this.storeManagerAPI.addProduct(product);
  }

}