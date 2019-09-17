import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'schedule-detail', loadChildren: './schedule-detail/schedule-detail.module#ScheduleDetailPageModule' },
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'subject-list', loadChildren: './subject-list/subject-list.module#SubjectListPageModule' },
  { path: 'schedule-config', loadChildren: './schedule-config/schedule-config.module#ScheduleConfigPageModule' },
  { path: 'tutor-detail', loadChildren: './tutor-detail/tutor-detail.module#TutorDetailPageModule' },
  { path: 'tutor-list', loadChildren: './tutor-list/tutor-list.module#TutorListPageModule' },
  { path: 'topup', loadChildren: './topup/topup.module#TopupPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
