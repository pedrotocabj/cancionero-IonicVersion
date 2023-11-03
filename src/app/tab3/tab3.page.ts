import { Component, ViewChild, inject } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Cancion } from '../core/interfaces/canciones';
import { Usuario } from '../core/interfaces/usuario';
import { UsuarioService } from '../core/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  usuarioService = inject(UsuarioService);
  router = inject(Router);

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
    this.router.navigate(['/tabs/tab1']);
  }

  guardarDatosPerfil() {
    this.usuarioService.guardarDatos(this.usuario);
  }
}
