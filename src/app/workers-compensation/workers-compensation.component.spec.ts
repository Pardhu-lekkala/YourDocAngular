import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompensationComponent } from './workers-compensation.component';

describe('WorkersCompensationComponent', () => {
  let component: WorkersCompensationComponent;
  let fixture: ComponentFixture<WorkersCompensationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersCompensationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
