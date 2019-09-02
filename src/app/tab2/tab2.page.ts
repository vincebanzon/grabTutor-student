import { Component } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  courses = this.getAllAvailableCourses();

  constructor(public router: Router, public navCtrl: NavController) {}

  pushPage(courseId) {
    this.router.navigate(['/tabs/tab2/subject-detail', {
      id: courseId,
    }]);
  }

  courseSelected(courseId) {
    console.log("course id: ", courseId);
    this.pushPage(courseId);
  }

  getAllAvailableCourses() {
    return [{
      id: 0,
      name: 'Math',
      sub: 'Learn Math in no time!'
    }, {
      id: 1,
      name: 'Eng',
      sub: 'Learn Eng in no time!'
    }, {
      id: 2,
      name: 'Science',
      sub: 'Learn Science in no time!'
    }, {
      id: 3,
      name: 'History',
      sub: 'Learn History in no time!'
    }]
  }

}
