import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairBusinessComponent } from './hair-business.component';

describe('HairBusinessComponent', () => {
  let component: HairBusinessComponent;
  let fixture: ComponentFixture<HairBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
