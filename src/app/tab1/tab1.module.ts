import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      {
        path: '/schedule-detail',
        loadChildren: () => 
          import('../schedule-detail/schedule-detail.module').then(m => m.ScheduleDetailPageModule)
      }
    ])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
