import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signstranslatorgame2Component } from './signstranslatorgame2.component';

describe('Signstranslatorgame2Component', () => {
  let component: Signstranslatorgame2Component;
  let fixture: ComponentFixture<Signstranslatorgame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signstranslatorgame2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signstranslatorgame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
