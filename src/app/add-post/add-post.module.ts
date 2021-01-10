import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';
import { AdComponent } from './ad/ad.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { ImageComponent } from '../shared/image/image.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostPageRoutingModule,
    SharedModule
  ],
  declarations: [AddPostPage,AdComponent,PostComponent]
})
export class AddPostPageModule {}
