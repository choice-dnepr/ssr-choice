import { Component } from '@angular/core';
import { ImagebbResponse } from '@core/models';
import { StoreManagerService } from '@core/services';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ship-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.scss']
})
export class StoreManagerComponent {
  imageUrl: string = '';
  storeManagerTabs: any[] = [
    {
      route: 'create-brand',
      text: 'создать брэнд'
    },
    {
      route: 'brand-list',
      text: 'список брэндов'
    }
  ];
  activeTab: string = this.storeManagerTabs[0].text;

  constructor(
    private readonly storeManager: StoreManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}


  addBrand() {
    this.storeManager.addBrand();
  }

  brandImageUpload(event: File) {
    this.storeManager.createImageUrl(event)
      .pipe(map((response: ImagebbResponse) => response['data']['url']))
      .subscribe(imageUrl => {
        console.log(imageUrl)
        this.imageUrl = imageUrl});
  }

  activateTab(item: any) {
    this.activeTab = item.text;
    this.router.navigate([item.route], { relativeTo: this.route });
  }
}
