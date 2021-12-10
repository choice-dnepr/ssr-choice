import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@core/services';

@Component({
  selector: 'ship-header',
  templateUrl: './ship-header.component.html',
  styleUrls: ['./ship-header.component.scss']
})
export class ShipHeaderComponent implements OnInit {
  headerItems: any[] = [];

  constructor(
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.headerService.getHeaderItems().subscribe(items => {
      this.headerItems = items;
    })
  }

}
