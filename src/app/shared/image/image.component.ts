import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdService } from 'src/app/ads/ad.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PostService } from 'src/app/image/post.service';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = window.atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  
  @Input() type: string;
  form:FormGroup
  isImage : boolean = true

  constructor(
                private modalCtrl: ModalController,
                private adService:AdService,
                private router :Router,
                private authService:AuthService,
                private postService:PostService
              ) { }
  ngOnInit() {

    if(!this.type){
      this.type = 'image'
    }
    this.isImage = this.type === 'image' ? true : false


    this.form = new FormGroup({
      hasImage: new FormControl(this.isImage),
      description: new FormControl(null, { updateOn:'blur', validators:[Validators.maxLength(180)]}),
      image: new FormControl(null)
    })

  }

  onCreate() {
    if (!this.form.valid) {
      return;
    }
    const userId = this.authService.userId
    let formData = new FormData()
    if(this.isImage){
      formData.append('image', this.form.get('image').value,`${userId}.png`)
    }
    formData.append('description',this.form.get('description').value)
    formData.append('creator',userId)
    formData.append('hasImage',this.form.get('hasImage').value)

      this.postService.addPost(formData).subscribe(()=>{
        this.form.reset()
        this.modalCtrl.dismiss()
        this.router.navigateByUrl('/tabs/posts')
      })
  }

  onPickImage(imageData: string | File) {
    let imageFile
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(imageData.replace('data:image/png;base64,', ''), 'image/png')
      }
      catch (err) {
        console.log('error occured');
        console.log(err);
        return;
      }
    }
    else {
      imageFile = imageData

    }
    this.form.patchValue({ image: imageFile })

  }

  close(){
    this.modalCtrl.dismiss()
  }


}
