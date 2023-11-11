import { Component, inject } from '@angular/core';
import { CANCIONES } from '../core/constants/canciones';
import { Cancion } from '../core/interfaces/canciones';
import { find } from 'rxjs';
import { CancioneroService } from '../core/services/cancioneroservice/cancionero.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cancioneroService = inject(CancioneroService);

  constructor() {}

  canciones:Cancion[] = CANCIONES
  

  public results: Cancion[] = [...this.cancioneroService.cancionesExistentes];

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.cancioneroService.cancionesExistentes.filter((cancion) => cancion.titulo.toLowerCase().indexOf(query) > -1);
  }

}
