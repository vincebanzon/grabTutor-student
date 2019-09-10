import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubjectListPage } from './subject-list.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectListPage
  },
  {
    path: '/schedule-config',
    loadChildren: () =>
      import('../schedule-config/schedule-config.module').then(m => m.ScheduleConfigPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubjectListPage]
})
export class SubjectListPageModule {}
