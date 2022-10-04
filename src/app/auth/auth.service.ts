import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { postInterface } from '../image/post.service';
import { adInterface } from '../ads/ad.service';

export interface userInterface{
  _id:string
  name:string
  phoneNo:number
  password:string
  posts:[postInterface],
  ads:[adInterface],
  createdAt:string,
  updatedAt:string

}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  isLogin: boolean 
  private _userId :string // = '5e14f08e61bf7353a8eabaec'
  // url:string ="https://handy-man-api.herokuapp.com/"
  url:string ="http://localhost:8080/"
  constructor(private http: HttpClient,private router:Router,private server:ServerService) { }
  ngOnInit(){
    this.url=this.server.url
  }
  get userId(){
    return this._userId
  }
  set userId(userId:string){
    this._userId = userId
  }

  register(name:string, phoneNo: number, password: string){
    return this.http.post<{message:string,user:{name:string,phoneNo:string,userId:string}}>(`${this.url}auth/create-user`,{name:name,password:password,phoneNo:phoneNo})
    // .subscribe(()=>{
    //    this.router.navigateByUrl('/tabs/ads')
    // }
      
    //   ,err=>{console.log(err)
    // })
  }
   login(formData:FormData){
     return this.http.post<{name:string,token:Object,userId}>(`${this.url}auth/login`,formData)
   }
   fetchUserDetails(userId){
    return this.http.get<{user:userInterface}>(`${this.url}auth/user/${userId}`)
   }
}
