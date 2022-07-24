import { Component } from '@angular/core';
import { StoreManagerService } from '@core/services';
import { ActivatedRoute, Router } from '@angular/router';

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
    },
    {
      route: 'create-product',
      text: 'создать продукт'
    }
  ];
  activeTab: string = this.storeManagerTabs[0].text;

  constructor(
    private readonly storeManager: StoreManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}


  addBrand() {
  
  }

  brandImageUpload(event: File) {
 
  }

  activateTab(item: any) {
    this.activeTab = item.text;
    this.router.navigate([item.route], { relativeTo: this.route });
  }
}
