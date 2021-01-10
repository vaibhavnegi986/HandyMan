import { Component, OnInit, Input } from '@angular/core';
import { AdService, adInterface } from '../ad.service';
import { map, take } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss'],
})
export class AdDetailsComponent implements OnInit {
 @Input() id: string
 isLoading:boolean
  constructor(private adService:AdService,private modalCtrl:ModalController) { }
  ad:adInterface

  ngOnInit() {
    // console.log(this.id);
    this.isLoading= true
    this.adService.fetchDetail(this.id).pipe(
      take(1),
      map(res=>{
        return res.ad
      })
    ).subscribe((ad)=>{
      this.ad = ad
      this.isLoading = false
    },err=>{
      this.isLoading = false
      console.log(err);
      
    })
    
  }
  close(){
    this.modalCtrl.dismiss()
  }

}
