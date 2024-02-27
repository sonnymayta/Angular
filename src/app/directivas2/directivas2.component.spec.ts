import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivas2Component } from './directivas2.component';

describe('Directivas2Component', () => {
  let component: Directivas2Component;
  let fixture: ComponentFixture<Directivas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivas2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Directivas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
