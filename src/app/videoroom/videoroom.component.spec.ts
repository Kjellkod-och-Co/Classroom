import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoroomComponent } from './videoroom.component';

describe('VideoroomComponent', () => {
  let component: VideoroomComponent;
  let fixture: ComponentFixture<VideoroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
