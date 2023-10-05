import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  tarjetas: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this.http
      .get<any>('https://app.gosummus.com/testing/api/tarjetas')
      .subscribe((data) => {
        this.tarjetas = data.tarjetas;
      });
  }

  editarTarjeta(numeroTarjeta: string) {
    this.router.navigate(['/editar', numeroTarjeta]);
  }
}
