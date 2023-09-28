import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CANCIONES } from 'src/app/core/constants/canciones';
import { Cancion } from 'src/app/core/interfaces/canciones';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.page.html',
  styleUrls: ['./cancion.page.scss'],
})
export class CancionPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      CANCIONES.forEach((cancion) => {
        const cancionEncontrada = CANCIONES.find(
          (cancion) => cancion.id == params['id']
        );
        if (cancionEncontrada) {
          this.cancion = cancionEncontrada;
        }
      });
    });
  }

  cancion:Cancion = {
    id:0,
    titulo:"",
    banda:"",
    album:"",
    img:"",
    acordes:""
  }

  imagenPorDefecto:string = "../../../../assets/icon/NotFound.jpg"

  ngOnInit() {}
}
