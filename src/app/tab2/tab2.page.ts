import { Component } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public navCtrl: NavController) {}

  selectedSubject(subjId) {
    console.log("Hello vince" + subjId);
    this.pushPage();
  }

  pushPage() {
    this.router.navigateByUrl('/tabs/tab2/subject-detail');
    // this.navCtrl.navigateForward('tab/tab2/subject-detail');
  }

}
