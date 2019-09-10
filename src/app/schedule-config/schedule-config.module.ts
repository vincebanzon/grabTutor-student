import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScheduleConfigPage } from './schedule-config.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleConfigPage
  },
  {
    path: '/tutor-list',
    loadChildren: () =>
      import('../tutor-list/tutor-list.module').then(m => m.TutorListPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleConfigPage]
})
export class ScheduleConfigPageModule {}
