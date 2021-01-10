import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  lang:string
  constructor(
              private translate:TranslateService,
              private modalCtrl:ModalController,
              private alertCtrl:AlertController
            ) { }

  ngOnInit() {
   this.lang=   this.translate.defaultLang
  }
  changeLang(inputLang:string){
    
    this.translate.setDefaultLang(inputLang);

  }



}
