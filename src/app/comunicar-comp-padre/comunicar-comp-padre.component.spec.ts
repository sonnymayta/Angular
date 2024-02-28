import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicarCompPadreComponent } from './comunicar-comp-padre.component';

describe('ComunicarCompPadreComponent', () => {
  let component: ComunicarCompPadreComponent;
  let fixture: ComponentFixture<ComunicarCompPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicarCompPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicarCompPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
