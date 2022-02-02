import { Component, OnInit } from '@angular/core';
import { PresentationMockService } from '@core/mocks';
import { SmartImage } from '@core/models';

@Component({
  selector: 'present-section',
  templateUrl: './present-section.component.html',
  styleUrls: ['./present-section.component.scss']
})
export class PresentSectionComponent implements OnInit {
  mainPhoto: SmartImage = {} as SmartImage;
  mainText: string = '';
  photoSet: SmartImage[] = [];
  public withBorder: boolean = true;

  constructor(private readonly presentSectionMock: PresentationMockService) {}

  ngOnInit(): void {
    const sectionData = this.presentSectionMock.getPresentationData();
    this.mainPhoto = sectionData?.mainPhoto;
    this.mainText = sectionData?.mainText;
    this.photoSet = sectionData?.photoSet;
  }

}
