import { Component, ViewChild, inject } from '@angular/core';
import { CANCIONES } from '../core/constants/canciones';
import { Cancion } from '../core/interfaces/canciones';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CancioneroService } from '../core/services/cancioneroservice/cancionero.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  @ViewChild(IonModal) modal: IonModal;

  cancioneroService = inject(CancioneroService);
  canciones:Cancion[] = CANCIONES;

cancion:Cancion = {
  id: this.cancioneroService.cancionesExistentes.length + 1,
  titulo: '',
  banda: '',
  album: '',
  img: '',
  acordes: '',
}
  
  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.cancion, 'enviar');
    this.cancioneroService.agregarCancionAlCancionero(this.cancion);
    }




}
