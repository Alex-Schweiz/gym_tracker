import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushupsComponent } from './pushups.component';

describe('PushupsComponent', () => {
  let component: PushupsComponent;
  let fixture: ComponentFixture<PushupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
