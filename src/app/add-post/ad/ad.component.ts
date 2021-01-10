import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdModalPage } from 'src/app/shared/ad-modal/ad-modal.page';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  share(type:string){
    this.modalCtrl.create({component:AdModalPage,componentProps:{type:type}})
    .then(modalEl=>{
      modalEl.present()
    })
  }

}
