import { Component, OnInit } from '@angular/core';
import { AuthService, userInterface } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user:userInterface
  isLoading:boolean 
  ad: any;
  posts: [any];
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.isLoading = true
  }
  ionViewWillEnter(){
      this.isLoading = true
    this.authService.fetchUserDetails(this.authService.userId).subscribe(res=>{
      this.user = res.user
      this.isLoading = false
    })
  }

}
