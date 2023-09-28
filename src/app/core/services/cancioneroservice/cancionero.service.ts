import { Injectable } from '@angular/core';
import { CANCIONES } from '../../constants/canciones';
import { Cancion } from '../../interfaces/canciones';

@Injectable({
  providedIn: 'root'
})
export class CancioneroService {

  constructor() { }

  canciones:Cancion[] = CANCIONES

  agregarCancionAlCancionero(){
    CANCIONES.push()
  }

  quitarCancionDelCancionero(){
    CANCIONES.slice()
  }

  ActualizarCancionero(){

  }

}
