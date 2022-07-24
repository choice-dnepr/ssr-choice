import { Component } from '@angular/core';

@Component({
  selector: 'create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent {
  imageUrl: string = '';
  brandName: string = '';
  uploadImageProgress = false;

  constructor(
  ) {}


  addBrand() {
    // this.storeManager.addBrand();
  }

  brandImageUpload(event: File) {
  }
}
