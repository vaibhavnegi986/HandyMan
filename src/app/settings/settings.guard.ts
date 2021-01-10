import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsGuard implements CanLoad  {
  constructor(private setttingsService: SettingsService,private router :Router){}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.setttingsService.getCredentials()) { 
      this.router.navigateByUrl('/settings')
    }
    return this.setttingsService.getCredentials()
  }
}
