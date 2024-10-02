import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeOrdertypeComponent } from './mange-ordertype.component';

describe('MangeOrdertypeComponent', () => {
  let component: MangeOrdertypeComponent;
  let fixture: ComponentFixture<MangeOrdertypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangeOrdertypeComponent]
    });
    fixture = TestBed.createComponent(MangeOrdertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
