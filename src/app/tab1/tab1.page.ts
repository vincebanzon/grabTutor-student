import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  schedules = this.getAllSchedules();

  constructor(public router: Router) {}

  pushPage(schedule) {
    this.router.navigate(['/tabs/tab1/schedule-detail', {
      schedule: JSON.stringify(schedule)
    }]);
  }

  scheduleSelected(schedule) {
    console.log("schedule selected: ", schedule);
    this.pushPage(schedule);
  }

  getAllSchedules() {
    
    // [{
    //   id: 0,
    //   subject: {
    //     name: 'Math',
    //     sub: 'Learn Math in no time!'
    //   },
    //   starttime: "10:00",
    //   date: "Saturday"
    // }, {
    //   id: 1,
    //   subject: {
    //     name: 'English',
    //     sub: 'Learn English in no time!'
    //   },
    //   starttime: "10:00",
    //   date: "Saturday"
    // }, {
    //   id: 2,
    //   subject: {
    //     name: 'Science',
    //     sub: 'Learn Science in no time!'
    //   },
    //   starttime: "10:00",
    //   date: "Saturday"
    // }]

    return [{
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "00:00",
      endtime: "00:00",
      date: "Thursday",
      subjectInfo: {
        id: 0,
        name: "Math",
        sub: "Learn Math in no time!"  
      },
      studentInfo: {
        id: 0,
        firstname: "Jose",
        lastname: "rizal",
        address: "",
        age: "21",
        phoneNo: "091234123412",
        role: "student"
      },
      tutorInfo: {
        id: 0,
        firstname: "Teacher",
        lastname: "Ann",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor"
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "00:00",
      endtime: "00:00",
      date: "Thursday",
      subjectInfo: {
        id: 0,
        name: "English",
        sub: "Learn English in no time!"  
      },
      studentInfo: {
        id: 0,
        firstname: "Jose",
        lastname: "rizal",
        address: "",
        age: "21",
        phoneNo: "091234123412",
        role: "student"
      },
      tutorInfo: {
        id: 0,
        firstname: "Teacher",
        lastname: "Ann",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor"
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "00:00",
      endtime: "00:00",
      date: "Thursday",
      subjectInfo: {
        id: 0,
        name: "Science",
        sub: "Learn Science in no time!"  
      },
      studentInfo: {
        id: 0,
        firstname: "Jose",
        lastname: "rizal",
        address: "",
        age: "21",
        phoneNo: "091234123412",
        role: "student"
      },
      tutorInfo: {
        id: 0,
        firstname: "Teacher",
        lastname: "Ann",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor"
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "00:00",
      endtime: "00:00",
      date: "Thursday",
      subjectInfo: {
        id: 0,
        name: "History",
        sub: "Learn History in no time!"  
      },
      studentInfo: {
        id: 0,
        firstname: "Jose",
        lastname: "rizal",
        address: "",
        age: "21",
        phoneNo: "091234123412",
        role: "student"
      },
      tutorInfo: {
        id: 0,
        firstname: "Teacher",
        lastname: "Ann",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor"
      }
    }]
  }

}
