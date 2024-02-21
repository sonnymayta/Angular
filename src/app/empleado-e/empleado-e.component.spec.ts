import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEComponent } from './empleado-e.component';

describe('EmpleadoEComponent', () => {
  let component: EmpleadoEComponent;
  let fixture: ComponentFixture<EmpleadoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
