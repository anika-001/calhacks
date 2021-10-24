import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SactivitiesComponent } from './sactivities.component';

describe('SactivitiesComponent', () => {
  let component: SactivitiesComponent;
  let fixture: ComponentFixture<SactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
