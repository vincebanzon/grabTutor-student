import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.page.html',
  styleUrls: ['./tutor-list.page.scss'],
})
export class TutorListPage implements OnInit {

  tutors: any = this.getAllTutors();

  subjectId;
  starttime;
  endtime;
  date;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.starttime = this.route.snapshot.paramMap.get('starttime');
    this.endtime = this.route.snapshot.paramMap.get('endtime');
    this.date = this.route.snapshot.paramMap.get('date');
  }

  getAllTutors() {
    return [{
      id: 0,
      avatar: 'assets/avatar/avatar-finn.png',
      firstname: 'Finn',
      lastname: 'Fetch',
      sub: "I'm a big deal",
      moto: "Listen, I've had a pretty messed up day...",
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }]
    }, {
      id: 1,
      avatar: 'assets/avatar/avatar-han.png',
      firstname: 'Han',
      lastname: 'Solo',
      sub: 'Look, kid...',
      moto: "I've got enough on my plate as it is, and I...",
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }]
    },{
      id: 2,
      avatar: 'assets/avatar/avatar-rey.png',
      firstname: 'Rey',
      lastname: 'Zoom',
      sub: 'I can handle myself',
      moto: 'You will remove these restraints and leave...',
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }]
    }, {
      id: 3,
      avatar: 'assets/avatar/avatar-yoda.png',
      firstname: 'Jose',
      lastname: 'Rizal',
      sub: 'Scientist',
      moto: 'Nole Me Tangere',
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }]
    }, {
      id: 4,
      avatar: 'assets/avatar/avatar-poe.png',
      firstname: 'Luke',
      lastname: 'Skywalker',
      sub: 'Your thoughts betray you',
      moto: 'I feel the good in you, the conflict...',
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }]
    }]

  }

  tutorSelected(tutor) {
    console.log("tutor: ", tutor)
    this.pushPage(tutor);
  }

  pushPage(tutor) {
    this.router.navigate(['/tabs/tab2/tutor-detail', {
      subjectId: this.subjectId,
      starttime: this.starttime,
      endtime: this.endtime,
      date: this.date,
      tutor: JSON.stringify(tutor)
    }])
  }

}
