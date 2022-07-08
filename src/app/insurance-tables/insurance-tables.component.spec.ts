import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTablesComponent } from './insurance-tables.component';

describe('InsuranceTablesComponent', () => {
  let component: InsuranceTablesComponent;
  let fixture: ComponentFixture<InsuranceTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
