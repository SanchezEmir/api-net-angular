import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditPersonaComponent } from './insert-edit-persona.component';

describe('InsertEditPersonaComponent', () => {
  let component: InsertEditPersonaComponent;
  let fixture: ComponentFixture<InsertEditPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEditPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
