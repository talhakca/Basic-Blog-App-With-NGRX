import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesTeachingToolkitComponent } from './diabetes-teaching-toolkit.component';

describe('DiabetesTeachingToolkitComponent', () => {
  let component: DiabetesTeachingToolkitComponent;
  let fixture: ComponentFixture<DiabetesTeachingToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesTeachingToolkitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesTeachingToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
