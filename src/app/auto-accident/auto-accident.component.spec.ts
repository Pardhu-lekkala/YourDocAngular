import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAccidentComponent } from './auto-accident.component';

describe('AutoAccidentComponent', () => {
  let component: AutoAccidentComponent;
  let fixture: ComponentFixture<AutoAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoAccidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
