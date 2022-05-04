import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagebbResponse } from '@core/models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreManagerService {

  imgbbKey: string = '8e7162fff53faf84a2bb96ed1b43fec6';
  
  constructor(
    private readonly http: HttpClient
  ) {}

  addBrand() {
    this.http.post('http://localhost:4200/api/create-brand', {
      name: "Choice",
      artist: "test"
    }).subscribe(response => console.log(response));
  }

  createImageUrl(img: File): Observable<ImagebbResponse> {
    const formData = new FormData();
    formData.append('image', img);

    return this.http
      .post<ImagebbResponse>('https://api.imgbb.com/1/upload', formData, { params: { key: this.imgbbKey }})
  }

}