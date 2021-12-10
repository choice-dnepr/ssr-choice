import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipHeaderComponent } from './ship-header.component';

describe('ShipHeaderComponent', () => {
  let component: ShipHeaderComponent;
  let fixture: ComponentFixture<ShipHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
