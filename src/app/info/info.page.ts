import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  infos :number[] = [0,1,5,5,6]
  constructor() { }

  ngOnInit() {
  }
  onShow(i:number){
    console.log(i);
    
  }

}
