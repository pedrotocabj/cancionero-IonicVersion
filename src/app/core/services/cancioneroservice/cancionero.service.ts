import { Injectable } from '@angular/core';
import { CANCIONES } from '../../constants/canciones';
import { Cancion } from '../../interfaces/canciones';

@Injectable({
  providedIn: 'root'
})
export class CancioneroService {

  constructor() { }

  canciones:Cancion[] = CANCIONES;

  agregarCancionAlCancionero(cancion:Cancion){
    this.canciones.push(cancion)
    console.log(this.canciones)
  }

  quitarCancionDelCancionero(){
    this.canciones.slice()
  }

  ActualizarCancionero(){

  }

}
