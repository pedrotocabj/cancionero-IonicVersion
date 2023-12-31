import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancion } from 'src/app/core/interfaces/canciones';
import { CancioneroService } from 'src/app/core/services/cancioneroservice/cancionero.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.page.html',
  styleUrls: ['./cancion.page.scss'],
})
export class CancionPage{
  constructor(
    private activatedRoute: ActivatedRoute,
    private cancioneroService: CancioneroService
  ) {
    activatedRoute.params.subscribe((params) => {
      cancioneroService.cancionesExistentes.forEach((cancion) => {
        const cancionEncontrada = cancioneroService.cancionesExistentes.find(
          (cancion) => cancion.id == params['id']
        );
        if (cancionEncontrada) {
          this.cancion = cancionEncontrada;
        }
      });
    });
  }
  

  cancion: Cancion = {
    id: 0,
    titulo: '',
    banda: '',
    img: '',
    acordes: '',
    letra:'',
  };

  imagenPorDefecto: string = '../../../../assets/icon/NotFound.jpg';


  }




