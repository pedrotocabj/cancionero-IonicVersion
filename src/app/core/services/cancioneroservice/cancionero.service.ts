import { Injectable } from '@angular/core';
import { Cancion } from '../../interfaces/canciones';

@Injectable({
  providedIn: 'root',
})
export class CancioneroService {
  constructor() {
    const memoriaCa = localStorage.getItem('canciones');
    if (memoriaCa) {
      this.cancionesExistentes = JSON.parse(memoriaCa);
      this.results = JSON.parse(memoriaCa);
    }
  }

  cancionesExistentes: Cancion[] = [];
  results = []

  agregarCancionAlCancionero(cancion: Cancion) {
    if (cancion.titulo != ''){
      this.cancionesExistentes.push(cancion);
      this.results.push(cancion)
      this.ActualizarCancionero();
    }
  }

  quitarCancionDelCancionero(id: number) {
    const index = this.cancionesExistentes.findIndex(
      (cancion) => cancion.id === id
    );

    if (index !== -1) {
      this.cancionesExistentes.splice(index, 1);
      this.results.splice(index, 1);
      localStorage.setItem(
        'canciones',
        JSON.stringify(this.cancionesExistentes)
      );
    }
    this.ActualizarCancionero();
  }

  ActualizarCancionero() {
    localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes));
    this.results = JSON.parse(localStorage.getItem('canciones'));
  }
}
