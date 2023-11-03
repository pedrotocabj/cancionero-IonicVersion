import { Injectable, WritableSignal, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {
    const usuarioLS = localStorage.getItem('perfil');
    if(usuarioLS) this.usuario.set(JSON.parse(usuarioLS))
  }

  usuario:WritableSignal<Usuario | undefined> = signal(undefined)

  guardarDatos(usuario:Usuario){
    localStorage.setItem('perfil', JSON.stringify(usuario));
    this.usuario.set(usuario)
  }

}
