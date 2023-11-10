import { Injectable } from '@angular/core';
import { CANCIONES } from '../../constants/canciones';
import { Cancion } from '../../interfaces/canciones';
import { Component, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CancioneroService {

  constructor() { 
    localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes))
  }
  
  canciones:Cancion[] = CANCIONES;

  cancionesExistentes: Cancion[] = JSON.parse(localStorage.getItem('canciones'));
  


  agregarCancionAlCancionero(cancion:Cancion){
    this.cancionesExistentes.push(cancion)
    this.ActualizarCancionero()
  }

  quitarCancionDelCancionero(id:number){
    const index = this.cancionesExistentes.findIndex(cancion => cancion.id === id);

    if (index !== -1) {
      this.cancionesExistentes.splice(index, 1);
      localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes));
    }
    this.ActualizarCancionero();
  }

  ActualizarCancionero(){
    localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes));
  }

  getId(id:number): Cancion | undefined {
    return this.cancionesExistentes.find(cancion => cancion.id === id);
  }

}
