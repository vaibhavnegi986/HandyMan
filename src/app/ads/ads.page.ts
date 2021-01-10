import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdService, adInterface } from './ad.service';
import { Ads } from './ads.model';
import { Subscription } from 'rxjs';
import { LoadingController, ModalController } from '@ionic/angular';
import { AdDetailsComponent } from './ad-details/ad-details.component';

 interface Ad {
  description:string,
   imageUrl: string,
   price:string,
   _id: string,
 createdAt: string,
 updatedAt: string,
}

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit ,OnDestroy {
  ads: adInterface[] = []
  isLoading:boolean = false
  private AdSubscription : Subscription
  error:boolean

  constructor(private adService: AdService,private loadingCtrl:LoadingController,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.AdSubscription = this.adService.ads.subscribe(ads=>{
      console.log(ads);
      ads.forEach(ad => {
        console.log(ad);
        
      });
      
      this.ads = ads
    })
    this.adService.fetchAds()
    // console.log(this.ads);
    
  }
  ionViewWillEnter(){
    this.isLoading = true

    this.adService.fetchAds().subscribe(()=>{
      this.isLoading= false
    },err=>{
      this.isLoading=false
      this.error=true
    })
  }
  ngOnDestroy(){
    if(this.AdSubscription) this.AdSubscription.unsubscribe()
  }
  call(id:string){
    if(!id){
      return
    }
    this.modalCtrl.create({component:AdDetailsComponent,componentProps:{id:id}}).then(
      el=>{
        el.present()
      }
    )
  }

}
