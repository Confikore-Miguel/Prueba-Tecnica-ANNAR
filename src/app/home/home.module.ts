import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PrincipalComponent } from './pages/principal/principal.component';

import { MsgErrorDirective } from "./directivas/msg-error.directive";

@NgModule({
  declarations: [
    PrincipalComponent,
    MsgErrorDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
