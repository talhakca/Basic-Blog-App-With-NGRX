import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderResourcedCountriesComponent } from './under-resourced-countries.component';

describe('UnderResourcedCountriesComponent', () => {
  let component: UnderResourcedCountriesComponent;
  let fixture: ComponentFixture<UnderResourcedCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderResourcedCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderResourcedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
