import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading;

  constructor(  private loadingController: LoadingController ) { }

  ngOnInit() {    
    this.presentLoading('Espere por favor!!!!');    
    
    setTimeout( ()=> this.loading.dismiss() ,2000);
  }

 
  async presentLoading( message:string ) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
      //duration: 2000
    });
    await this.loading.present();

    
  }

}
