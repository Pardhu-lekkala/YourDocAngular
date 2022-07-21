import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaibilityComponent } from './laibility.component';

describe('LaibilityComponent', () => {
  let component: LaibilityComponent;
  let fixture: ComponentFixture<LaibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
