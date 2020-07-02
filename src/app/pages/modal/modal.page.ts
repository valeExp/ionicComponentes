import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( public modalController: ModalController ) { }

  ngOnInit() {
  }

  async lanzarModal(){

    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'valeria',
        'pais': 'Argentina'        
      }
    });
    //return await modal.present();
    await modal.present();

    const{ data } = await modal.onDidDismiss();
  
    console.log( 'Retorno del Modal', data );

  }  

}
