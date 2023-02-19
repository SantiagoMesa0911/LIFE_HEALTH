import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludMentalComponent } from './salud-mental.component';

describe('SaludMentalComponent', () => {
  let component: SaludMentalComponent;
  let fixture: ComponentFixture<SaludMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
