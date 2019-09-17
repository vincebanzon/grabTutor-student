import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScheduleDetailPage } from './schedule-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDetailPage
  },
  {
    path: "/tutor-detail",
    loadChildren: () =>
      import("../tutor-detail/tutor-detail.module").then(m => m.TutorDetailPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleDetailPage]
})
export class ScheduleDetailPageModule {}
