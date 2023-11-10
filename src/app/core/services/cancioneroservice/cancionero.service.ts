import { Injectable } from '@angular/core';
import { CANCIONES } from '../../constants/canciones';
import { Cancion } from '../../interfaces/canciones';
import { Component, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CancioneroService {

  constructor() { 
    localStorage.setItem('canciones', JSON.stringify(CANCIONES))
  }
  
  canciones:Cancion[] = CANCIONES;

  cancionesExistentes: Cancion[] = JSON.parse(localStorage.getItem('canciones'));
  


  agregarCancionAlCancionero(cancion:Cancion){
    this.cancionesExistentes.push(cancion)
    localStorage.setItem('canciones', JSON.stringify(this.cancionesExistentes))
  }

  quitarCancionDelCancionero(){
    this.canciones.slice()
  }

  ActualizarCancionero(){

  }

}
