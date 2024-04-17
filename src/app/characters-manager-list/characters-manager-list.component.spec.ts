import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManagerListComponent } from './characters-manager-list.component';

describe('CharactersManagerListComponent', () => {
  let component: CharactersManagerListComponent;
  let fixture: ComponentFixture<CharactersManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersManagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
