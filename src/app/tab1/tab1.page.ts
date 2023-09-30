import { Component } from '@angular/core';
import { CANCIONES } from '../core/constants/canciones';
import { Cancion } from '../core/interfaces/canciones';
import { find } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  canciones:Cancion[] = CANCIONES 
  
  public results: Cancion[] = [...this.canciones];

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.canciones.filter((cancion) => cancion.titulo.toLowerCase().indexOf(query) > -1);

  }

}
