import { Component, OnInit } from '@angular/core';
import { SharedSettingsService } from '@core/services/shared/shared-settings.service';

@Component({
  selector: 'ship-footer',
  templateUrl: './ship-footer.component.html',
  styleUrls: ['./ship-footer.component.scss']
})
export class ShipFooterComponent implements OnInit {

  constructor(private readonly sharedSettings: SharedSettingsService) {}

  ngOnInit(): void {
    this.sharedSettings.switchOFFGlobalSpinner();
  }
}
