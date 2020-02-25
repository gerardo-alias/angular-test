import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsViewComponent } from './favs-view.component';

describe('FavsViewComponent', () => {
  let component: FavsViewComponent;
  let fixture: ComponentFixture<FavsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
