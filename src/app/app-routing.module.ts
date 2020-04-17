import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {HomeComponent} from './home/home.component';
import {SportsComponent} from './sports/sports.component';
import {GKComponent} from './gk/gk.component';
import {CelComponent} from './cel/cel.component';
import {SnComponent} from './sn/sn.component';
import {SMComponent} from './sm/sm.component';

const routes: Routes = [
  {path: '' , component: FormComponent},
  {path: 'Home' , component: HomeComponent},
  {path : 'Home/sports' , component: SportsComponent},
  {path: 'Home/GK' , component: GKComponent},
  {path : 'Home/Cell' , component: CelComponent},
  {path: 'Home/sn' , component: SnComponent},
  {path : 'Home/sm' , component: SMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
