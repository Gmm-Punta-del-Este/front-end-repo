// imports de router angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes para hacer su ruta

import { ErrorComponent } from './components/error/error.component';
import { NotasListGeneralComponent } from './components/notas-list-general/notas-list-general.component';
import { ApartamentoTodosComponent } from './components/apartamentos/apartamento-todos/apartamento-todos.component';

//array de rutas
const appRoutes: Routes = [
    {path: '', component: NotasListGeneralComponent},
    {path: 'home', component: NotasListGeneralComponent},
    {path: 'apartamentos/todos', component: ApartamentoTodosComponent},
    {path: '**', component: ErrorComponent}
];

//exportamos el modulo de router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
