import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASLtranslatorComponent } from './asltranslator.component';

describe('ASLtranslatorComponent', () => {
  let component: ASLtranslatorComponent;
  let fixture: ComponentFixture<ASLtranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASLtranslatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASLtranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
