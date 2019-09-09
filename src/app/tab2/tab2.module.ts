import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SubjectDetailPage } from './../subject-detail/subject-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2Page },
      // { path: '/subject-details', component: SubjectDetailPage}
      { 
        path: '/subject-list',
        loadChildren: () => 
          import('../subject-list/subject-list.module').then(m => m.SubjectListPageModule)
      }
      
  ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
