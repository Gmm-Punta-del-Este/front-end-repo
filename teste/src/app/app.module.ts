import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app.routing';

import { MaterialModule } from './material/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ErrorComponent } from './components/error/error.component';
import { NotasListGeneralComponent } from './components/notas-list-general/notas-list-general.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ErrorComponent,
    NotasListGeneralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
