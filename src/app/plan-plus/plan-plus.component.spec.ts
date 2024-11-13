import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPlusComponent } from './plan-plus.component';

describe('PlanPlusComponent', () => {
  let component: PlanPlusComponent;
  let fixture: ComponentFixture<PlanPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
