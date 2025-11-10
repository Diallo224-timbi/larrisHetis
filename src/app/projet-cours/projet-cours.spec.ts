import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCours } from './projet-cours';

describe('ProjetCours', () => {
  let component: ProjetCours;
  let fixture: ComponentFixture<ProjetCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetCours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetCours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
