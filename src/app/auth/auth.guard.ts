import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService :AuthService, private router:Router,private toastController:ToastController){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
     {
       if(this.authService.userId){
         return true;

       }
       else{
         this.toastController.create({message:'please login first',duration:1500,position:'bottom',buttons:[{text:"okay",role:'cancel'}],color:'tertiary'}).then(el=>el.present())
         this.router.navigateByUrl('/auth')

        return false
       }
  
    }
}
