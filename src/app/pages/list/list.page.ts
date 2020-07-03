import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios:Observable<any>;

  @ViewChild('lista', {static: false}) lista:IonList;

  constructor( private dataService:DataService, public toastController: ToastController ) { }

  ngOnInit() {
    //this.dataService.getUsuarios$().subscribe( res => console.log( res) );

     this.usuarios = this.dataService.getUsuarios$();
  }
  favorite(usuario){
    this.presentToast('Se agrego a favorito');
    //console.log(usuario);
    this.lista.closeSlidingItems();
  }
  share(usuario){
    //console.log(usuario);
    this.presentToast('Compartio!');
    this.lista.closeSlidingItems();
  }
  unread(usuario){    
    this.presentToast('Borro!');
    //console.log('usuario', usuario);
  }

  async presentToast( mensaje:string ) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
