import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  private _urlApi:string ='http://190.60.101.59:6003/api'

  constructor(private http:HttpClient) { }

  registrarUsuario(data:{}){
    return this.http.post(this._urlApi+`/personas`,data);
  }
}
