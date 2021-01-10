import { Component, OnInit, ViewChild,EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { Capacitor, Plugins, CameraSource, CameraResultType } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('filePicker',{static:false}) filePicker: ElementRef<HTMLInputElement>
  @Output() imagePick = new EventEmitter<string | File>()
  @Input() showPreview : boolean = false

  selectedImage:string
  usePicker:boolean = false
  constructor(private platform:Platform) { }

  ngOnInit() {
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')){
      this.usePicker = true
    }
  }



  onPickImage(){
    if( !Capacitor.isPluginAvailable('Camera') ){
      // console.log(this.usePicker);
      // console.log(Capacitor.isPluginAvailable('Camera'));
      
      this.filePicker.nativeElement.click()
      return;
    }
    
      Plugins.Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        correctOrientation: true,
        height: 320,
        width :200,
        resultType: CameraResultType.DataUrl,
      })
      .then(image=>{
  
        this.selectedImage = image.dataUrl;
        this.imagePick.emit(image.dataUrl)
        this.showPreview = true
        
      })
      .catch(err=>{
        console.log(err);
        if(this.usePicker){
          this.filePicker.nativeElement.click()
        }
        return;
        
      })
    }



  onFileChange(event:Event){
    console.log(event);
    const pickedFile = (event.target as HTMLInputElement).files[0]
    if(!pickedFile){
      return
    }
    const fr = new FileReader()
    fr.onload = ()=>{
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl
      console.log(this.selectedImage);
      
      this.imagePick.emit(pickedFile)
      this.showPreview = true

    }
    fr.readAsDataURL(pickedFile)
  }

}
