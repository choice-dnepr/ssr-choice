import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface PreviewUrl {
  id: number;
  url: SafeUrl;
}

@Component({
  selector: 'product-img-upload',
  templateUrl: './product-img-upload.component.html',
  styleUrls: ['./product-img-upload.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProductImgUploadComponent),
    multi: true
   }]
})
export class ProductImgUploadComponent implements ControlValueAccessor {
  private images: File[] = [];
  public previewImages: PreviewUrl[] = [];

  constructor(private readonly sanitizer: DomSanitizer) {}

  public fileUpload(event: File) {
    this.images = this.images || [] as File[];
    this.images.push(event);
    this.onChange(this.images);
    this.getPreviewUrls(event);
  }

  private getPreviewUrls(file: File): void {
    const url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    const ids = this.previewImages.map((item) => item.id);
    const id = ids.length ? Math.max(...ids) + 1 : 0;
    this.previewImages.push(Object.assign({}, { id, url }));
  }

  onChange(_: File[]) {}

  writeValue(images: File[]): void {
    this.images = images;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched() {}

  public removeUlpoadedImage(url: PreviewUrl): void {
    const removedUrlIndex = this.previewImages.findIndex((item) => item.id === url.id);
    this.previewImages = this.previewImages.filter((item, index) => index !== removedUrlIndex);
    this.images = this.images.filter((item, index) => index !== removedUrlIndex);
    this.onChange(this.images);
  }
}
