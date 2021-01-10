import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
    private translate:TranslateService,
    private router :Router
    ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss()

  }
  changeLang(lang:string){
    this.alertCtrl.create({
      header:"Language change",
      message:"Are you sure to change language ?",
      buttons:[{text:'okay',handler:()=>{
         this.translate.setDefaultLang(lang)
         this.modalCtrl.dismiss()
         this.router.navigateByUrl('/tabs/posts')
      }},{text:'cancel',role:'cancel'}]
    })
    .then(alertEl=>{ return alertEl.present()})

  }

}
