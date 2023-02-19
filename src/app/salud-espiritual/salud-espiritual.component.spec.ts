import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludEspiritualComponent } from './salud-espiritual.component';

describe('SaludEspiritualComponent', () => {
  let component: SaludEspiritualComponent;
  let fixture: ComponentFixture<SaludEspiritualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludEspiritualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludEspiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
