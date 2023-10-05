import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  numeroTarjeta!: string;
  tarjeta: any = {
    titular: '',
    numero: '',
    fecha: '',
    cvv: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const numeroTarjeta = params['numero'];
    });
    this.obtenerTarjeta();
  }

  obtenerTarjeta() {
    this.http
      .get<any>(
        'https://app.gosummus.com/testing/api/tarjeta/' + this.tarjeta.titular
      )
      .subscribe((data) => {
        this.tarjeta = data.tarjeta;
      });
  }

  actualizarTarjeta() {
    this.http
      .put(
        'https://app.gosummus.com/testing/api/tarjeta/' + this.numeroTarjeta,
        this.tarjeta
      )
      .subscribe((response) => {
        console.log('Tarjeta actualizada:', response);
        this.router.navigate(['/listar']);
      });
  }
}
