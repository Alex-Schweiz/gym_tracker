import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitupsComponent } from './situps.component';

describe('SitupsComponent', () => {
  let component: SitupsComponent;
  let fixture: ComponentFixture<SitupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
