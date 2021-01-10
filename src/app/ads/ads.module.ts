import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPageRoutingModule } from './ads-routing.module';

import { AdsPage } from './ads.page';
import { TranslateModule } from '@ngx-translate/core';

import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AdsPageRoutingModule
  ],
  entryComponents:[AdDetailsComponent],
  declarations: [AdsPage,AdDetailsComponent]
})
export class AdsPageModule {}
