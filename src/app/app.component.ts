import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePage } from './settings/language/language.page';
import { LanguageComponent } from './shared/language/language.component';
import { Capacitor, Plugins } from '@capacitor/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private modalCtrl : ModalController,
    private authService: AuthService
  ) {
    this.initializeApp();
    translate.setDefaultLang('en');
    let userId = localStorage.getItem( 'userId' );
    this.authService.userId = userId ;

  }


  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable("SplashScreen"))
      {
        Plugins.SplashScreen.hide()
      }
    });
  }
  openLang(){
    this.modalCtrl.create({component:LanguageComponent})
      .then(modalEl=>{
        modalEl.present()
      })
  }
}
