import { Component } from '@angular/core';


@Component({
  selector: 'product-img-upload',
  templateUrl: './product-img-upload.component.html',
  styleUrls: ['./product-img-upload.component.scss']
})
export class ProductImgUploadComponent {

  public fileUpload(event: File) {
    //const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event))
  }
}
