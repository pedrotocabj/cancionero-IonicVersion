import { Component, ViewChild, inject } from '@angular/core';
import { Cancion } from '../core/interfaces/canciones';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CancioneroService } from '../core/services/cancioneroservice/cancionero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  @ViewChild(IonModal) modal: IonModal;

  cancioneroService = inject(CancioneroService);

  cancion: Cancion = {
    id: this.cancioneroService.cancionesExistentes.length + 1,
    titulo: '',
    banda: '',
    album: '',
    img: '',
    acordes: '',
    letra:'',
  };

  cancel() {
    this.modal.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal.dismiss(this.cancion, 'enviar');
    this.cancioneroService.agregarCancionAlCancionero(this.cancion);

    this.cancion = {
      id: this.cancioneroService.cancionesExistentes.length + 1,
      titulo: '',
      banda: '',
      album: '',
      img: '',
      acordes: '',
      letra:'',
    };
  }

  quitarCancion(id: number) {
    this.cancioneroService.quitarCancionDelCancionero(id);
  }

  handleImageUpload(event): void {
    const file = event.target.files[0];
    if (file) {
      this.cancion.img = URL.createObjectURL(file);
    }
  }
}
