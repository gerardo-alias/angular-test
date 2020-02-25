import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerViewComponent } from './trailer-view.component';

describe('TrailerViewComponent', () => {
  let component: TrailerViewComponent;
  let fixture: ComponentFixture<TrailerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
