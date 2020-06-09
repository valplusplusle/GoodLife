import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfeelComponent } from './bodyfeel.component';

describe('BodyfeelComponent', () => {
  let component: BodyfeelComponent;
  let fixture: ComponentFixture<BodyfeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyfeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyfeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
