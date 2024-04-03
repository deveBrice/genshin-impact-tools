import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsFilterComponent } from './stars-filter.component';

describe('StarsFilterComponent', () => {
  let component: StarsFilterComponent;
  let fixture: ComponentFixture<StarsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
