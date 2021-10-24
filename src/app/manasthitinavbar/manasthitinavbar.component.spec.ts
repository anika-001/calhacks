import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManasthitinavbarComponent } from './manasthitinavbar.component';

describe('ManasthitinavbarComponent', () => {
  let component: ManasthitinavbarComponent;
  let fixture: ComponentFixture<ManasthitinavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManasthitinavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManasthitinavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
