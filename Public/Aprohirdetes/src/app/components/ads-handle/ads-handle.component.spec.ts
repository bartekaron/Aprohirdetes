import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsHandleComponent } from './ads-handle.component';

describe('AdsHandleComponent', () => {
  let component: AdsHandleComponent;
  let fixture: ComponentFixture<AdsHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsHandleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
