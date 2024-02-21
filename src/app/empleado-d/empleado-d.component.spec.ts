import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDComponent } from './empleado-d.component';

describe('EmpleadoDComponent', () => {
  let component: EmpleadoDComponent;
  let fixture: ComponentFixture<EmpleadoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
