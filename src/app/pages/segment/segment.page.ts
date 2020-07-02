import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes:Observable<any[]>;
  busqueda:string = '';  

  @ViewChild( IonSegment ) segment: IonSegment;

  constructor( private dataService: DataService) { }

   ngOnInit() {
      //  this.segment.value ="todos"; -> aca falla

      this.superHeroes = this.dataService.getHeroes$();

   }

  ionViewDidEnter() {
    this.segment.value ="todos";    
  }  

  segmentChanged( event ){
      //console.log( event );

      if( event.detail.value === 'todos' ){
          this.busqueda = '';          
      }else if( event.detail.value === 'dc comics' ){
        this.busqueda = "DC Comics";
      }else{
        this.busqueda = "Marvel Comics";
      }
      
      console.log( event.detail.value );
  }

}
