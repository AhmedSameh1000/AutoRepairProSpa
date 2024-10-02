import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangePartsComponent } from './mange-parts.component';

describe('MangePartsComponent', () => {
  let component: MangePartsComponent;
  let fixture: ComponentFixture<MangePartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangePartsComponent]
    });
    fixture = TestBed.createComponent(MangePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
