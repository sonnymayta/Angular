import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicarCompComponent } from './comunicar-comp.component';

describe('ComunicarCompComponent', () => {
  let component: ComunicarCompComponent;
  let fixture: ComponentFixture<ComunicarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicarCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
