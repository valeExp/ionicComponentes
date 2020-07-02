import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios:Observable<any>;

  @ViewChild('lista', {static: false}) lista:IonList;

  constructor( private dataService:DataService ) { }

  ngOnInit() {
    //this.dataService.getUsuarios$().subscribe( res => console.log( res) );

     this.usuarios = this.dataService.getUsuarios$();
  }
  favorite(usuario){
    console.log(usuario);
    this.lista.closeSlidingItems();
  }
  share(usuario){
    console.log(usuario);
    this.lista.closeSlidingItems();
  }
  unread(usuario){    
    console.log('usuario', usuario);
  }

}
