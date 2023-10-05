import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTarjetaComponent } from './buscar-tarjeta.component';

describe('BuscarTarjetaComponent', () => {
  let component: BuscarTarjetaComponent;
  let fixture: ComponentFixture<BuscarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarTarjetaComponent]
    });
    fixture = TestBed.createComponent(BuscarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
