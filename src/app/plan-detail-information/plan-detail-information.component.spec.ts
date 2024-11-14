import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailInformationComponent } from './plan-detail-information.component';

describe('PlanDetailInformationComponent', () => {
  let component: PlanDetailInformationComponent;
  let fixture: ComponentFixture<PlanDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDetailInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
