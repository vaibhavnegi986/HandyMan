import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private settingsService:SettingsService,private router:Router) { }

  ngOnInit() {
  }
  auth(){
    this.settingsService.setCredentials()
    this.router.navigateByUrl('/tabs/posts')

  }
}
