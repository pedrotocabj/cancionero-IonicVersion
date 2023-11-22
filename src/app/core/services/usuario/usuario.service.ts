import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioExistente: Usuario;

  constructor() {
    const memoriaUs = localStorage.getItem('perfil');
    if (memoriaUs) {
      this.usuarioExistente = JSON.parse(memoriaUs);
    }
  }

  guardarDatos(usuario: Usuario) {
    this.usuarioExistente = { ...this.usuarioExistente, ...usuario };
    this.actualizarLocalStorage();
  }

   actualizarLocalStorage() {
    localStorage.setItem('perfil', JSON.stringify(this.usuarioExistente));
  }

  actualizarUsuarioExistente() {
    const memoriaUs = localStorage.getItem('perfil');
    if (memoriaUs) {
      this.usuarioExistente = JSON.parse(memoriaUs);
    }
    console.log(this.usuarioExistente);
  }
}

  

