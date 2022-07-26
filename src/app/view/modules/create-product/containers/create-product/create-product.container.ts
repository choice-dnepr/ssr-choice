import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreManagerService } from '@core/services';
import { StoreManagerApiService } from '@core/services/store-manager/store-manager.api.service';

interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'create-product',
  templateUrl: './create-product.container.html',
  styleUrls: ['./create-product.container.scss']
})
export class CreateProductComponent implements OnInit {
  public productForm: FormGroup;
  public brands: Brand[];
  
  constructor(
    private readonly storeManagerService: StoreManagerService,
    private readonly storeApi: StoreManagerApiService
  ) {
    this.brands = [
      {
        value: "первый",
        viewValue: "первый брэнд"
      },
      {
        value: "второй",
        viewValue: "второй брэнд"
      }
    ]

    this.productForm = new FormGroup({
      "id": new FormControl("", [ Validators.required ]),
      "sku": new FormControl("", [ Validators.required ]),
      "name": new FormControl("", [ Validators.required ]),
      "description": new FormControl("", [ Validators.required ]),
      "price": new FormControl(0, [ Validators.required ]),
      "priceWithDiscount": new FormControl(0, [ Validators.required ]),
      "brand": new FormControl("", [ Validators.required ]),
      "pictures": new FormControl([] as File[])
    });
  }

  ngOnInit(): void {
    // TODO: determine id
    this.productForm.get('id')?.patchValue(1);
    // TODO: add new sku
    this.productForm.get('sku')?.patchValue(423729);

    this.productForm.valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  get productId(): number {
    return this.productForm?.controls?.id?.value || 0;
  }

  get productSKU(): number {
    return this.productForm?.controls?.sku?.value || 0;
  }

  submitProduct() {
    const file = this.productForm.get('pictures')?.value[0];
    this.storeApi.uploadImgToStorage(file, 'images/product').subscribe(result => {
      console.log(result)
    });
    // this.storeManagerService.addProduct(this.productForm.value);
    // this.productForm.reset();
  }
}
