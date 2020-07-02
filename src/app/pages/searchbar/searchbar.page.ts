import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums:Album[]=[];
  textoVacio = "";

  constructor( private dataService:DataService ) { }

  ngOnInit() {
   this.dataService.getAlbums$().subscribe(
      ( res ) => this.albums =  res
    );
  }

  buscar( event ){
      console.log(event);

      this.textoVacio = event.detail.value;
  }

  reorder( event ){
    console.log( event );
  }

}
