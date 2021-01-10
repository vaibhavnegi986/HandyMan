import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDetailPageRoutingModule } from './info-detail-routing.module';

import { InfoDetailPage } from './info-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    InfoDetailPageRoutingModule
  ],
  declarations: [InfoDetailPage]
})
export class InfoDetailPageModule {}
