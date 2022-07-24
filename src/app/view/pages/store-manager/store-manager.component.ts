import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ship-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.scss']
})
export class StoreManagerComponent implements OnInit {
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
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    const childRoute = url.split('/').pop();
    this.activeTab = childRoute || '';
  }

  activateTab(item: any) {
    this.activeTab = item.route;
    this.router.navigate([item.route], { relativeTo: this.route });
  }
}
