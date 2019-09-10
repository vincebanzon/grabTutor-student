import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.page.html',
  styleUrls: ['./tutor-list.page.scss'],
})
export class TutorListPage implements OnInit {

  tutors: any = this.getAllTutors();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getAllTutors() {
    return [{
      name: 'jose rizal',
      profession: 'good at Math'
    }, {
      name: 'jose rizal',
      profession: 'good at Math'
    },{
      name: 'jose rizal',
      profession: 'good at Math'
    }, {
      name: 'jose rizal',
      profession: 'good at Math'
    }, {
      name: 'jose rizal',
      profession: 'good at Math'
    }, {
      name: 'jose rizal',
      profession: 'good at Math'
    }]

  }

  tutorSelected(tutor) {
    console.log("tutor: ", tutor)
    this.pushPage(tutor);
  }

  pushPage(tutor) {
    this.router.navigate(['/tabs/tab2/tutor-detail', {id: 1}])
  }

}
