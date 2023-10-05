import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BuscarTarjetaComponent } from './buscar-tarjeta/buscar-tarjeta.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListarComponent,
    EditarComponent,
    SidenavComponent,
    MenuPrincipalComponent,
    BuscarTarjetaComponent,
    ResultadosBusquedaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
