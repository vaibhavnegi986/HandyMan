import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageComponent } from './image/image.component';
import { AdModalPage } from './ad-modal/ad-modal.page';
import { LanguageComponent } from './language/language.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ImageComponent,AdModalPage,LanguageComponent,ImagePickerComponent],
  exports:[ImageComponent,AdModalPage,LanguageComponent,ImagePickerComponent],
  entryComponents: [ImageComponent,AdModalPage,LanguageComponent,ImageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    IonicModule
  ]
})
export class SharedModule { }
