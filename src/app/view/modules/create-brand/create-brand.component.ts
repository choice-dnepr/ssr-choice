import { Component } from '@angular/core';
import { ImagebbResponse } from '@core/models';
import { StoreManagerService } from '@core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent {
  imageUrl: string = '';
  uploadImageProgress = false;

  constructor(
    private readonly storeManager: StoreManagerService
  ) {}


  addBrand() {
    this.storeManager.addBrand();
  }

  brandImageUpload(event: File) {
    this.uploadImageProgress = true;
    this.storeManager.createImageUrl(event)
      .pipe<string>(map((response: ImagebbResponse): string => response?.data?.url || ''))
      .subscribe((imageUrl) => {
        this.uploadImageProgress = false;
        this.imageUrl = imageUrl;
      });
  }
}
