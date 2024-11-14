import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPersonResourcesComponent } from './natural-person-resources.component';

describe('NaturalPersonResourcesComponent', () => {
  let component: NaturalPersonResourcesComponent;
  let fixture: ComponentFixture<NaturalPersonResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalPersonResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalPersonResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
