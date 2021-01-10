import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageComponent } from '../../shared/image/image.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  shareImage(type:string){
      this.modalCtrl.create({component:ImageComponent,componentProps:{type: type}})
        .then(modalEl=>{
          modalEl.present()
        })
      


  }


}
