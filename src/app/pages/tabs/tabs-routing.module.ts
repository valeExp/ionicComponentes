import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'contact'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
        loadChildren:'../avatar/avatar.module#AvatarPageModule'
      },
      {
        path:'contact',
        loadChildren:'../grid/grid.module#GridPageModule'
      },
      {
        path:'settings',
        loadChildren:'../segment/segment.module#SegmentPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
