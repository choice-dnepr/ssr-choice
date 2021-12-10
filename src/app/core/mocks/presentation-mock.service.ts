import { Injectable } from '@angular/core';
import { PresentSectionResponse, SmartImage } from '@core/models';

@Injectable({
  providedIn: 'any',
})
export class PresentationMockService {
  mainPhoto: SmartImage;
  photoSet: SmartImage[] = [];
  mainText: string;
  
  constructor() {
    this.mainPhoto = {
      src: 'assets/images/present-section/main-photo/marta_bg.jpg',
      alt: 'main photo marta',
      srcSet: []
    }
    this.photoSet = [
      {
        src: 'assets/images/present-section/photo-set/photo-set-1.jpg',
        alt: 'main photo marta',
        srcSet: []
      },
      {
        src: 'assets/images/present-section/photo-set/photo-set-2.jpg',
        alt: 'main photo marta',
        srcSet: []
      },
      {
        src: 'assets/images/present-section/photo-set/photo-set-3.jpg',
        alt: 'main photo marta',
        srcSet: []
      },
      {
        src: 'assets/images/present-section/photo-set/photo-set-4.jpg',
        alt: 'main photo marta',
        srcSet: []
      }
    ];
    this.mainText = 'Всем привет!\nМеня зовут Марта Шатецкая.\n\nЯ топ-лидер украинской компании CHOICE.\n\nРазвиваю экологичный MLM- бизнес в Украине через позитивное влияние на общество личным примером.\n\nЯ считаю, что лидерами не рождаются, ими становятся и моя цель дать каждому возможность реализовать себя в MLM бизнесе, сформировать сильные осознанные команды лидеров, которые вместе со мной готовы развиваться, совершенствоваться, нести в мир идею осознанного потребления, для сохранения здоровья и красоты, гармонично развиваться во всех сферах жизни, менять стереотипы и создавать новую историю MLM- бизнеса, главной ценностью которого есть Человек!\n\nЕсли вам отзывается моя идея и ценности - '
  }

  getPresentationData(): PresentSectionResponse {
    return {
      mainPhoto: this.mainPhoto,
      photoSet: this.photoSet,
      mainText: this.mainText
    } as PresentSectionResponse;
  }

}