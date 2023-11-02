import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

usuarioArray:Usuario[] = []

  guardarDatos(usuario:Usuario){
    localStorage.setItem('perfil', JSON.stringify(usuario));
    this.usuarioArray.push(usuario);
  }

  leerDatos(){
    const perfil = localStorage.getItem('perfil')
    return perfil ? JSON.parse(perfil) : undefined;
  }
}
