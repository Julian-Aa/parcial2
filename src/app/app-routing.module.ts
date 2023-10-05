import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'editar/:numero', component: EditarComponent }, // Agrega la ruta con parámetro
  { path: 'resultados-busqueda', component: ResultadosBusquedaComponent },

  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path: 'agregar',
    component: AgregarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
