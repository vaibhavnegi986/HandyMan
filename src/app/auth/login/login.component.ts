import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form:FormGroup

  constructor(private authService:AuthService,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null),
      phoneNo: new FormControl(null),
      password: new FormControl(null)
    })
  }
  login(){
    if(!this.form.valid){
      return;
    }
    this.authService.register(this.form.get('name').value,this.form.get('phoneNo').value,this.form.get('password').value)
    .subscribe(()=>{
      this.router.navigateByUrl("/tabs/ads")
    },err=>{
      console.log(err);
      this.alertCtrl.create({
        header:'Error Occured',
        message:"Sign Up failed. Please try again later !",
        buttons:[{text:'okay',role:'cancel'}]
      }).then(el=>{
        el.present();
      })
      
    })
  }

}
