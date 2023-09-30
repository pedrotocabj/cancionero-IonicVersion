import { Component, ViewChild } from '@angular/core';
import { CANCIONES } from '../core/constants/canciones';
import { Cancion } from '../core/interfaces/canciones';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  @ViewChild(IonModal) modal: IonModal;


  canciones:Cancion[] = CANCIONES
  
  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.canciones, 'enviar');
    console.log(this.canciones);
  }

  usuarioExiste:boolean = true;

  guardarDatosPerfil() {
  } 
}
