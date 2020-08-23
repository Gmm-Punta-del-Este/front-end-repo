// imports de router angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes para hacer su ruta

import { ErrorComponent } from './components/error/error.component';
import { NotasListGeneralComponent } from './components/notas-list-general/notas-list-general.component';

//array de rutas
const appRoutes: Routes = [
    {path: '', component: NotasListGeneralComponent},
    {path: '**', component: ErrorComponent}
];

//exportamos el modulo de router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
