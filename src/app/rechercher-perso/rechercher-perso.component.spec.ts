import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherPersoComponent } from './rechercher-perso.component';

describe('RechercherPersoComponent', () => {
  let component: RechercherPersoComponent;
  let fixture: ComponentFixture<RechercherPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
