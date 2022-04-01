import { Component } from '@angular/core';
import { BrandRow } from '@core/models/shared';

@Component({
  selector: 'company-tools-section',
  templateUrl: './company-tools-section.component.html',
  styleUrls: ['./company-tools-section.component.scss']
})
export class CompanyToolsComponent {
  public designateWords: string[] = ['работы', 'развития'];
  public brandRows: BrandRow[];

  constructor() {
    this.brandRows = [
      {
        title: "Система обновления природной красоты",
        description: "Активная косметика с действенным натуральным составом.",
        logo: "assets/images/brands/white_mandarin.png"
      },
      {
        title: "здоровая система питания",
        description: "Суперфуды из элитных сортов злаковых и бобовых для впечатляющей энергии.",
        logo: "assets/images/brands/good_eat.png"
      },
      {
        title: "Система оздоровления всего организма",
        description: "Фитокомплексы здоровья. Реальное решение для полноценной жизни каждого.",
        logo: "assets/images/brands/choice_phyto.png"
      },
      {
        title: "Система ухода за ротовой полостью",
        description: "Активная косметика с действенным натуральным составом.",
        logo: "assets/images/brands/biox.png"
      },
      {
        title: "Система заботы о доме",
        description: "Натуральные действенные средства для стирки, уборки и мытья посуды.",
        logo: "assets/images/brands/green_max.png"
      }
    ];
  }
}
