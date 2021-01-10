import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  credentials:boolean = true //false

  constructor() { }

    setCredentials(){
    this.credentials = true
  } 
  getCredentials(){
    return this.credentials
  }
}
