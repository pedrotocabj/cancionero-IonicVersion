import { Injectable } from '@angular/core';
import { Cancion } from '../../interfaces/canciones';

@Injectable({
  providedIn: 'root',
})
export class CancioneroService {
  constructor() {
    const memoria = localStorage.getItem('canciones');
    if (memoria) {
      this.cancionesExistentes = JSON.parse(memoria);
    }
  }

  cancionesExistentes: Cancion[] = [];

  agregarCancionAlCancionero(cancion: Cancion) {
    this.cancionesExistentes.push(cancion);
    this.ActualizarCancionero();
  }

  quitarCancionDelCancionero(id: number) {
    const index = this.cancionesExistentes.findIndex(
      (cancion) => cancion.id === id
    );

    if (index !== -1) {
      this.cancionesExistentes.splice(index, 1);
      localStorage.setItem(
        'canciones',
        JSON.stringify(this.cancionesExistentes)
      );
    }
    this.ActualizarCancionero();
  }

  ActualizarCancionero() {
    localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes));
  }
}
