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


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ErrorComponent,
    NotasListGeneralComponent,
    DialogoConfiguracionComponent,
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
