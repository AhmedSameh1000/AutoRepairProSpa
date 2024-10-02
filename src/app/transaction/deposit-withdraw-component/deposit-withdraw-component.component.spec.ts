import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWithdrawComponentComponent } from './deposit-withdraw-component.component';

describe('DepositWithdrawComponentComponent', () => {
  let component: DepositWithdrawComponentComponent;
  let fixture: ComponentFixture<DepositWithdrawComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositWithdrawComponentComponent]
    });
    fixture = TestBed.createComponent(DepositWithdrawComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
