import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app.routing';
import {FormsModule} from '@angular/forms';

import { MaterialModule } from './material/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ErrorComponent } from './components/error/error.component';
import { NotasListGeneralComponent } from './components/notas-list-general/notas-list-general.component';
import { DialogoConfiguracionComponent } from './dialogos/dialogo-configuracion/dialogo-configuracion.component';
import { ApartamentoTodosComponent } from './components/apartamentos/apartamento-todos/apartamento-todos.component';
import { ApartamentoInhouseComponent } from './components/apartamentos/apartamento-inhouse/apartamento-inhouse.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ErrorComponent,
    NotasListGeneralComponent,
    DialogoConfiguracionComponent,
    ApartamentoTodosComponent,
    ApartamentoInhouseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    FormsModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogoConfiguracionComponent]
})
export class AppModule { }
