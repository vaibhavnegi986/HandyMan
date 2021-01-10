import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdService } from 'src/app/ads/ad.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

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
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.page.html',
  styleUrls: ['./ad-modal.page.scss'],
})
export class AdModalPage implements OnInit {
  @Input() type: string;
  selectedImage: string
  form: FormGroup
  isSellAd: boolean = false
  isRentAd: boolean = false
  isHireAd: boolean = false
  constructor(private modalCtrl: ModalController,
    private adService: AdService,
    private router: Router,
    private authService : AuthService) { }

  ngOnInit() {
    if (!this.type) {
      this.type = "sell"
    }
    if (this.type === "sell") {
      this.isSellAd = true
    }
    if (this.type === "hire") {
      this.isHireAd = true
    }
    if (this.type === "rent") {
      this.isRentAd = true
    }
    console.log(this.authService.userId);
    
    this.form = new FormGroup({
      // title: new FormControl(null, { updateOn:'blur', validators:[Validators.required]}),
      description: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.maxLength(180)] }),
      price: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.min(1)] }),
      image: new FormControl(null),
      location: new FormControl(null,{updateOn:'blur',validators:[Validators.required]}),
      type:new FormControl(this.type),
      creator:new FormControl(this.authService.userId)
    })

  }
  close() {
    this.modalCtrl.dismiss()
  }

  onCreate(type: string) {
    if (!this.form.valid) {
      return;
    }
    let formData = new FormData()
    formData.append('image', this.form.get('image').value,'.png')
    formData.append('description',this.form.get('description').value)
    formData.append('price',this.form.get('price').value)
    formData.append('type',this.form.get('type').value)
    formData.append('location',this.form.get('location').value)
    formData.append('creator',this.authService.userId)
    this.adService.addAd(formData).subscribe(() => {
      this.form.reset()
      this.modalCtrl.dismiss()
      this.router.navigateByUrl('/tabs/ads')
    })
  }
  onPickImage(imageData: string | File) {
    let imageFile
    // console.log(imageData);
    // (imageData)
    if (typeof imageData === 'string') {
      try {
        // console.log(imageData);

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


}


