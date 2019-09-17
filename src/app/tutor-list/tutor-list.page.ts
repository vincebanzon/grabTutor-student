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
  duration;
  date;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.starttime = this.route.snapshot.paramMap.get('starttime');
    this.duration = this.route.snapshot.paramMap.get('duration');
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
      }],
      reviews: [{
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "I learned a lot in our first session!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/sandman.jpg",
          firstname: "Peter",
          lastname: "Parker"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Information overload from our session. Thank you.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/faith_hill.jpg",
          firstname: "Isheen",
          lastname: "Kae"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Teached me how to do things easier!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/julius_jones.jpg",
          firstname: "Julius",
          lastname: "Jones"
        }
      }]
    }, {
      id: 1,
      avatar: 'assets/avatar/avatar-han.png',
      firstname: 'Han',
      lastname: 'Solo',
      sub: 'Look, kid...',
      moto: "I've got enough on my plate as it is, and I will keep it.",
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }],
      reviews: [{
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Teached me how to do things easier!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/julius_jones.jpg",
          firstname: "Julius",
          lastname: "Jones"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Rey, thank you for teaching me.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/jack_sparrow_sullen.jpg",
          firstname: "Alexandrei",
          lastname: "the Great"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Information overload from our session. Thank you.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/faith_hill.jpg",
          firstname: "Isheen",
          lastname: "Kae"
        }
      }]
    },{
      id: 2,
      avatar: 'assets/avatar/avatar-rey.png',
      firstname: 'Rey',
      lastname: 'Zoom',
      sub: 'I can handle myself',
      moto: 'You will remove these restraints and leave.',
      credentials: [{
        name: 'Diploma',
        sub: 'BSED'
      }, {
        name: 'School Graduated',
        sub: 'University of Cebu'
      }],
      reviews: [{
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Rey, thank you for teaching me.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/jack_sparrow_sullen.jpg",
          firstname: "Alexandrei",
          lastname: "the Great"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Information overload from our session. Thank you.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/faith_hill.jpg",
          firstname: "Isheen",
          lastname: "Kae"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Will definitely book again!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/nugatowa.jpg",
          firstname: "Ivan",
          lastname: "Jane"
        }
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
      }],
      reviews: [{
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Will definitely book again!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/nugatowa.jpg",
          firstname: "Ivan",
          lastname: "Jane"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Teached me how to do things easier!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/julius_jones.jpg",
          firstname: "Julius",
          lastname: "Jones"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Information overload from our session. Thank you.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/faith_hill.jpg",
          firstname: "Isheen",
          lastname: "Kae"
        }
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
      }],
      reviews: [{
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Information overload from our session. Thank you.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/faith_hill.jpg",
          firstname: "Isheen",
          lastname: "Kae"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Will definitely book again!",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/nugatowa.jpg",
          firstname: "Ivan",
          lastname: "Jane"
        }
      }, {
        id: 0,
        tutorId: 0,
        studentId: 0,
        message: "Rey, thank you for teaching me.",
        date: "July 3, 2019",
        rate: "4",
        studentInfo: {
          avatar: "assets/avatar/jack_sparrow_sullen.jpg",
          firstname: "Alexandrei",
          lastname: "the Great"
        }
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
      duration: this.duration,
      date: this.date,
      tutor: JSON.stringify(tutor),
      isBookBtnVisible: true
    }])
  }

}
