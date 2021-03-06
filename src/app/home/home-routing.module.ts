import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'principal',component:PrincipalComponent},
      {path:'**',redirectTo:'principal'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
