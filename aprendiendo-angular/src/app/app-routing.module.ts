import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { VideojuegoComponent} from './videojuego/videojuego.component'
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component'

const routes: Routes = []=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'videojuego',component:VideojuegoComponent},
  {path:'zapatillas',component:ZapatillasComponent},
  {path:'cursos',component:CursosComponent},
  {path:'cursos/:nombre/:followers',component:CursosComponent},
  {path:'**',component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
