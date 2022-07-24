import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class StoreManagerApiService {

  constructor(
    private readonly firestore: Firestore
  ) {}

  public addProduct(product: any): Observable<any> {
    const productsInstance = collection(this.firestore, 'products');
    const result = addDoc(productsInstance, product);
    return from(result);
  }

}