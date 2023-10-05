import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetaService } from '../agregar/tarjeta.service';
import { BuscarService } from '../buscar-tarjeta/buscar.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {
  resultados: any[] = [];

  constructor(private route: ActivatedRoute, private buscarService: BuscarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const titular = params['titular'];
      // Realiza la búsqueda por titular utilizando el servicio
      this.buscarService.buscarPorTitular(titular).subscribe(data => {
        this.resultados = data;
      });
    });
  }
}
