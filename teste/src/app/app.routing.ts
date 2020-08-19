// imports de router angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes para hacer su ruta

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: ErrorComponent}
];

//exportamos el modulo de router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
