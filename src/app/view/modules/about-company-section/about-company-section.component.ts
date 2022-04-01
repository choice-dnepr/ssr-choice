import { Component } from '@angular/core';
import { CompanyAdvantage } from '@core/models/shared';

@Component({
  selector: 'about-company-section',
  templateUrl: './about-company-section.component.html',
  styleUrls: ['./about-company-section.component.scss']
})
export class AboutCompanyComponent {
  public designateWords: string[] = ['choice', 'возможности'];
  public aboutCompanyText: string = "Компания CHOICE развивает сетевой — партнерский бизнес нового уровня, который строится на экологичности отношений и индивидуальной реализации каждого партнера."
  public companyAdvantages: CompanyAdvantage[] = [];

  constructor() {
    this.companyAdvantages = [
      {
        order: 1,
        text: "Покупать качественные экологичные продукты за партнерской ценой с экономией 30%."
      },
      {
        order: 2,
        text: "Иметь необходимую потребительскую корзину продуктов для здоровья семьи бесплатно каждый месяц."
      },
      {
        order: 3,
        text: "Зарабатывать дополнительные деньги или создать полноценный бизнес, который сделает тебя независимым."
      },
      {
        order: 4,
        text: "Общаться с прогрессивными людьми и стать одним из них."
      }
    ]
  }

  ngOnInit(): void {}
}
