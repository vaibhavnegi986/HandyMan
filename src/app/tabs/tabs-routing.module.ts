import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SettingsGuard } from '../settings/settings.guard';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../posts/posts.module').then(m => m.PostsPageModule),
              canLoad:[SettingsGuard]
          }
        ]
      },
      {
        path: 'ads',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ads/ads.module').then(m => m.AdsPageModule)
          }
        ]
      },
      {
        path: 'add-post',
        loadChildren:() => import('../add-post/add-post.module').then(m=>m.AddPostPageModule),
        canLoad:[AuthGuard]

      },
      {
        path:'info',
        loadChildren:()=>import('../info/info.module').then(m=>m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
