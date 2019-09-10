import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutorListPage } from './tutor-list.page';

const routes: Routes = [
  {
    path: '',
    component: TutorListPage
  },
  {
    path: '/tutor-detail',
    loadChildren: () =>
      import('../tutor-detail/tutor-detail.module').then(m => m.TutorDetailPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorListPage]
})
export class TutorListPageModule {}
