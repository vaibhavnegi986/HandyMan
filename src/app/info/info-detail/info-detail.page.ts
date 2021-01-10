import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.page.html',
  styleUrls: ['./info-detail.page.scss'],
})
export class InfoDetailPage implements OnInit {
  i:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param=>{
      if(param['info']){
        // console.log(param['info']);
        this.i = param['info']
        
      }
      else{
        this.router.navigateByUrl('/tabs/info')
      }
    })
  }

}
