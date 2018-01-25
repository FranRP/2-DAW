import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraMenuComponent } from './cabecera-menu.component';

describe('CabeceraMenuComponent', () => {
  let component: CabeceraMenuComponent;
  let fixture: ComponentFixture<CabeceraMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
