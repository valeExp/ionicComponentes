import { Component, OnInit } from '@angular/core';
import { PopoverController, iosTransitionAnimation } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,      
      event: ev,
      mode:'ios',
      backdropDismiss:false
    });
    await popover.present();

    //const{ data } = await await popover.onDidDismiss();
    const{ data } = await await popover.onWillDismiss();
    console.log('item',data);
  }

}
