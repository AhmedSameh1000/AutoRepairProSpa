import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeTechnicalComponent } from './mange-technical.component';

describe('MangeTechnicalComponent', () => {
  let component: MangeTechnicalComponent;
  let fixture: ComponentFixture<MangeTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangeTechnicalComponent]
    });
    fixture = TestBed.createComponent(MangeTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
