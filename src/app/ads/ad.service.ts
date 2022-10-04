import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, tap, switchMap } from "rxjs/operators";
import { Ads } from './ads.model';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../server.service';

export interface adInterface {
  _id: string,
description: string,
imageUrl: string,
price: number,
type:string,
location:string,
creator:
 {posts: [],
   ads: [],
    _id: string,
     name: string,
     phoneNo: number
     password: string,
     createdAt: string,
     updatedAt: string,
     __v: number
    }

createdAt: string,
updatedAt: string,
}

@Injectable({
  providedIn: 'root'
})
export class AdService implements OnInit {
  
  // url:string = "https://handy-man-api.herokuapp.com/"
  url:string = "http://localhost:8080/"
  private _ads = new BehaviorSubject<adInterface[]>([])
  constructor(private http :HttpClient, private server : ServerService) { }
  ngOnInit(){
    // this.fetchAds()
    this.url =  this.server.url 
  }

  get ads()
  {
    return  this._ads.asObservable()
  }

  fetchAds()
  {
    return  this.http.get<{message:string,ads:adInterface[]}>(`${this.url}get-ad`).pipe(take(1),map(res=>{
      const ads: adInterface[] = []
        console.log(res.ads);
        
          res.ads.forEach(ad => {
            ads.push(ad)
          });
        return ads
        
    }),

    tap(ads=>{
      this._ads.next(ads)
    })
    
    )


    
  }

  fetchDetail(id:string){
     return  this.http.get<{message:string,ad:adInterface}>(`${this.url}ad-detail/${id}`)
  }

  addAd(formData:FormData){
    let createdAd:adInterface

     return this.http.post<{message:string,ad:adInterface}>(`${this.url}post-ad`,formData).pipe(
       switchMap(res=>{
        createdAd = res.ad
         return this.ads
       }),
      take(1),
      tap(ads=>{
        if(!createdAd)
        {
          return;
        }
        this._ads.next(ads.concat(createdAd))
      })
     )
  }

}
