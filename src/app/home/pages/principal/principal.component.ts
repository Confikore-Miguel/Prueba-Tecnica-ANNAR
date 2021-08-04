import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { RegistrarService } from '../../services/registrar.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor( private fb:FormBuilder,
               private rs:RegistrarService) { }

  miFormulario:FormGroup= this.fb.group({
    Nombres:['',[Validators.required,Validators.minLength(3)]],
    Apellidos:['',[Validators.required,Validators.minLength(3)]],
    Correo:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    Telefono:['',[Validators.required,Validators.minLength(7)]],
    Direccion:['',[Validators.required,Validators.minLength(4)]],
    Documento:['',[Validators.required,Validators.minLength(5)]],
    IdPersona:[`${Math.random}`]
  })

  ngOnInit(): void {
  }

  registrarUsuario(){
    const data =  this.miFormulario.value
    this.rs.registrarUsuario(data)
        .subscribe(usuario =>{
          if( usuario === 'Ya existe una Persona con ese número de documento'){
            Swal.fire('Respuesta','Ya existe una Persona con ese número de documento','error');
            return
          }
          Swal.fire('Respuesta','Usuario creado, bienvenido !!','success');
          this.miFormulario.reset()
        })
  }

  tieneError(campo:string):boolean{
    return this.miFormulario.get(campo)?.touched 
        && this.miFormulario.get(campo)?.invalid || false
  }

}
