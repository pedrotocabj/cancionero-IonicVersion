import { Component, ViewChild, inject } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Cancion } from '../core/interfaces/canciones';
import { Usuario } from '../core/interfaces/usuario';
import { UsuarioService } from '../core/services/usuario/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  usuarioService = inject(UsuarioService);
  constructor() {}
  //tsconfig.json ??//
  @ViewChild(IonModal) modal: IonModal;

  usuario: Usuario = {
    nombre: '',
    artistaFav: '',
    generoFav: '',
  };

  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.usuario, 'enviar');
    console.log(this.usuario);
  }

  usuarioExiste:boolean = false;

  guardarDatosPerfil() {
    this.usuarioService.guardarDatos(this.usuario);
    this.usuarioExiste = true;
  }
}
