import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class StoreManagerApiService {

  constructor(
    private readonly firestore: Firestore,
    private storage: Storage
  ) {}

  public addProduct(product: any): Observable<any> {
    const productsInstance = collection(this.firestore, 'products');
    const result = addDoc(productsInstance, product);
    return from(result);
  }


  public uploadImgToStorage(file: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, file));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );
  }

}