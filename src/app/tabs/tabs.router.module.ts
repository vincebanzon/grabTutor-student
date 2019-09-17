import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab1/schedule-detail',
        loadChildren: () =>
          import('../schedule-detail/schedule-detail.module').then(m => m.ScheduleDetailPageModule)
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab2/subject-list',
        loadChildren: () =>
          import('../subject-list/subject-list.module').then(m => m.SubjectListPageModule)
      },
      {
        path: 'tab2/schedule-config',
        loadChildren: () =>
          import('../schedule-config/schedule-config.module').then(m => m.ScheduleConfigPageModule)
      },
      {
        path: 'tab2/tutor-list',
        loadChildren: () =>
          import('../tutor-list/tutor-list.module').then(m => m.TutorListPageModule)
      },
      {
        path: 'tab2/tutor-detail',
        loadChildren: () =>
          import ('../tutor-detail/tutor-detail.module').then(m => m.TutorDetailPageModule)
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab3/topup',
        loadChildren: () => 
          import('../topup/topup.module').then(m => m.TopupPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
