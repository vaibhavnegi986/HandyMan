import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form : FormGroup
  isLoggedIn:boolean 
  constructor(private authService:AuthService,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneNo: new FormControl  (null,{validators:[Validators.required]}),
      password: new FormControl(null,{validators:[Validators.required]})
    })
  }

  signup(){
    if(!this.form.valid){
      return;
    }
    const formData = new FormData()
    formData.append('phoneNo',this.form.get('phoneNo').value)
    formData.append('password',this.form.get('password').value)
    this.authService.login(formData).subscribe(res=>{
      this.authService.userId =res.userId
      console.log(res);
      
      this.router.navigateByUrl('/tabs/ads')
    },err=>{
      this.alertCtrl.create({
        message:'Login failed, Please try again later !',
        header:'Error',
        buttons:[{text:'okay',role:'cancel'}]
      }).then(el=>{
        el.present();
      })

    })
  }


}
