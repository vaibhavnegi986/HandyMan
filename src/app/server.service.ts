import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  _url=`https://handy-man-api.onrender.com/`
  // _url=`http://localhost:8080/`
  // _url=`http://127.0.0.1:8080/`

  constructor() { }
  get url(){
    return this.url
  }
}

