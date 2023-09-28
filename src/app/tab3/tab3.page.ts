import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Cancion } from '../core/interfaces/canciones';
import { Usuario } from '../core/interfaces/usuario';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
//tsconfig.json ??//
 @ViewChild(IonModal) modal:IonModal;

usuario:Usuario[] =[{
nombre:"",
artistaFav:"",
generoFav:""
}]

cancel(){
  this.modal.dismiss(null, 'cancelar')
}

confirm(){
 
  this.modal.dismiss(this.usuario, 'enviar')
  console.log(this.usuario)
}
  
onWillDismiss(){
}
}
