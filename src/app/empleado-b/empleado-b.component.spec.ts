import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoBComponent } from './empleado-b.component';

describe('EmpleadoBComponent', () => {
  let component: EmpleadoBComponent;
  let fixture: ComponentFixture<EmpleadoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
