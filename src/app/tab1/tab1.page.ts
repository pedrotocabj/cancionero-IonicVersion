import { Component, inject } from '@angular/core';
import { Cancion } from '../core/interfaces/canciones';
import { find } from 'rxjs';
import { CancioneroService } from '../core/services/cancioneroservice/cancionero.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  cancioneroService = inject(CancioneroService);

  constructor() {}


  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.cancioneroService.results = this.cancioneroService.cancionesExistentes.filter(
      (cancion) => cancion.titulo.toLowerCase().indexOf(query) > -1
    );
  }
}
