import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeStoreComponent } from './mange-store.component';

describe('MangeStoreComponent', () => {
  let component: MangeStoreComponent;
  let fixture: ComponentFixture<MangeStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangeStoreComponent]
    });
    fixture = TestBed.createComponent(MangeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
