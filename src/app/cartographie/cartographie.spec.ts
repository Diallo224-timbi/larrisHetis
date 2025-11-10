import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartographie } from './cartographie';

describe('Cartographie', () => {
  let component: Cartographie;
  let fixture: ComponentFixture<Cartographie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartographie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartographie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
