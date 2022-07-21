import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPayComponent } from './self-pay.component';

describe('SelfPayComponent', () => {
  let component: SelfPayComponent;
  let fixture: ComponentFixture<SelfPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
