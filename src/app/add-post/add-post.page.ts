import { Component, OnInit } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  isPost: boolean =false
  isLoaded:boolean;

  constructor(private actionCtrl: ActionSheetController) { }

  ngOnInit() {
    
    this.actionOpen();
  }

   choose(val : string){
    if(val === 'New Job'){
      this.isPost = false
    }
    else{
      this.isPost= true
    }
  }

  actionOpen() {
    this.actionCtrl.create({
      header: 'choose an option',
      translucent:false,
      buttons: [
        {
          text: "New Job",
          handler: () => {
            this.isPost = false
            this.isLoaded = true
            this.actionCtrl.dismiss()
          }
        },
        {
          text: 'Post',
          
          handler: () => {
            this.isPost=true
            this.isLoaded= true
            this.actionCtrl.dismiss()
          }
        }
      ]
    }).
    then(El => {
      El.present()
      El.onWillDismiss().then(()=>{
        if(this.isLoaded === undefined){
          this.isLoaded = true
        }
      })

      })
    }



}
