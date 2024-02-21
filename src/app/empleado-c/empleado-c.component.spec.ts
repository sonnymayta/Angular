import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCComponent } from './empleado-c.component';

describe('EmpleadoCComponent', () => {
  let component: EmpleadoCComponent;
  let fixture: ComponentFixture<EmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
