import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '@core/models';
import { HeaderService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ship-header',
  templateUrl: './ship-header.component.html',
  styleUrls: ['./ship-header.component.scss']
})
export class ShipHeaderComponent implements OnInit {
  headerItems: NavigationItem[] = [];
  public headerLogo: string = "marta choice";
  public headerContact: string = "Контакты";

  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.getHeaderItems().subscribe(items => {
      this.headerItems = items;
    })
  }

  goHome(): void {
    this.router.navigateByUrl('');
  }

}
