import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquatsComponent } from './squats.component';

describe('SquatsComponent', () => {
  let component: SquatsComponent;
  let fixture: ComponentFixture<SquatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
