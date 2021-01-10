import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  helps:number[]=[1,2,3,4,5]

  constructor() { }

  ngOnInit() {
  }

}
