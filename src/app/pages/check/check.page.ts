import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  items:any[]=[
    {name:'primary', selected:false},
    {name:'secondary', selected:true},
    {name:'tertiary', selected:false},
    {name:'success', selected:false}
  ]

  constructor() { }

  ngOnInit() {
  }
  
  clickCheck(check){
    //Ionic primero hace el cambio y despues pinta el componente
    console.log(check);
  }
}
