import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjPipComponent } from './nj-pip.component';

describe('NjPipComponent', () => {
  let component: NjPipComponent;
  let fixture: ComponentFixture<NjPipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjPipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NjPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
