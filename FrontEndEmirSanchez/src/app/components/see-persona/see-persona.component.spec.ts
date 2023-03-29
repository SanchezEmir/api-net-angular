import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePersonaComponent } from './see-persona.component';

describe('SeePersonaComponent', () => {
  let component: SeePersonaComponent;
  let fixture: ComponentFixture<SeePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
