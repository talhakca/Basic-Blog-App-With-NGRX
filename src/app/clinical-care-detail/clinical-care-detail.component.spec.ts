import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCareDetailComponent } from './clinical-care-detail.component';

describe('ClinicalCareDetailComponent', () => {
  let component: ClinicalCareDetailComponent;
  let fixture: ComponentFixture<ClinicalCareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalCareDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalCareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
