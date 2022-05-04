import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpageComponent } from './bankpage.component';

describe('BankpageComponent', () => {
  let component: BankpageComponent;
  let fixture: ComponentFixture<BankpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
