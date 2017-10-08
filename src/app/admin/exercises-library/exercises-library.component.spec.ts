import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesLibraryComponent } from './exercises-library.component';

describe('ExercisesLibraryComponent', () => {
  let component: ExercisesLibraryComponent;
  let fixture: ComponentFixture<ExercisesLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
