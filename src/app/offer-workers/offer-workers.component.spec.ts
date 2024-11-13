import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferWorkersComponent } from './offer-workers.component';

describe('OfferWorkersComponent', () => {
  let component: OfferWorkersComponent;
  let fixture: ComponentFixture<OfferWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferWorkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
