import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRessource } from './pressource';

describe('PRessource', () => {
  let component: PRessource;
  let fixture: ComponentFixture<PRessource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRessource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRessource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
