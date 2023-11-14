import { Injectable, WritableSignal, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  guardarDatos(usuario: Usuario) {
    localStorage.setItem('perfil', JSON.stringify(usuario));
  }

  usuarioExistente = JSON.parse(localStorage.getItem('perfil'));
}
