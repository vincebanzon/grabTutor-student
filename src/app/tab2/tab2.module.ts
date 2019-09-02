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
        path: '/subject-details',
        loadChildren: () => 
          import('../subject-detail/subject-detail.module').then(m => m.SubjectDetailPageModule)
      }
      
  ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
