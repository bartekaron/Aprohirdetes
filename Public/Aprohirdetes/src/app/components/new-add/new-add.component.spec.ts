import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddComponent } from './new-add.component';

describe('NewAddComponent', () => {
  let component: NewAddComponent;
  let fixture: ComponentFixture<NewAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
