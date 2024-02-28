import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicarCompHijoComponent } from './comunicar-comp-hijo.component';

describe('ComunicarCompHijoComponent', () => {
  let component: ComunicarCompHijoComponent;
  let fixture: ComponentFixture<ComunicarCompHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicarCompHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicarCompHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
