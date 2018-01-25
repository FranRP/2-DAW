import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraDesplegarMenuComponent } from './cabecera-desplegar-menu.component';

describe('CabeceraDesplegarMenuComponent', () => {
  let component: CabeceraDesplegarMenuComponent;
  let fixture: ComponentFixture<CabeceraDesplegarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraDesplegarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraDesplegarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
