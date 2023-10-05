import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-tarjeta',
  templateUrl: './buscar-tarjeta.component.html',
  styleUrls: ['./buscar-tarjeta.component.css']
})
export class BuscarTarjetaComponent {
  titular: string = '';

  constructor(private router: Router) { }

  buscarPorTitular() {
    // Aquí puedes realizar la búsqueda utilizando el servicio de tarjetas
    // y luego redirigir a la página de resultados de búsqueda con el titular como parámetro
    this.router.navigate(['/resultados-busqueda', { titular: this.titular }]);
  }
}
