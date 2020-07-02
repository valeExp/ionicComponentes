import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.page.html',
  styleUrls: ['./list-order.page.scss'],
})
export class ListOrderPage implements OnInit {

  personajes= [ 'Aquaman', 'SuperMan', 'Batman', 'Flash', 'La mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ){   

    const itemMover = this.personajes.splice( event.detail.from, 1)[0];    
    this.personajes.splice( event.detail.to, 0, itemMover);

    event.detail.complete();

  }

  guardar(){
    console.log(this.personajes);
  }

}
