import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  schedules: any = [];

  constructor(public router: Router, private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.schedules = this.getAllSchedules();
    // this.schedules = this.scheduleService.getSchedules();
    console.log("s'");
    if(!this.schedules){ 
      this.schedules = [];
    }
    console.log("Schedules: ")
    console.log(this.schedules);
  }

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
      starttime: "16:00",
      endtime: "18:00",
      date: "Monday",
      status: "Active",
      location: "Gov. M. Cuenco ,Banilad, Cebu City",
      subjectInfo: {
        id: 0,
        name: "Addition",
        sub: "Learn Addition in no time!"  
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
        avatar: 'assets/avatar/avatar-finn.png',
        firstname: "Finn",
        lastname: "Fetch",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor",
        sub: "I'm a big deal",
        moto: "Listen, I've had a pretty messed up day...",
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "16:00",
      endtime: "18:00",
      date: "Tuesday",
      status: "Active",
      subjectInfo: {
        id: 0,
        name: "Basic Math (+, -, x, %)",
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
        avatar: 'assets/avatar/avatar-han.png',
        firstname: "Han",
        lastname: "Solo",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor",
        sub: 'Look, kid...',
        moto: "I've got enough on my plate as it is, and I will keep it.",
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "16:00",
      endtime: "18:00",
      date: "Wednesday",
      status: "Active",
      subjectInfo: {
        id: 0,
        name: "Subtraction",
        sub: "Learn how to subtract in no time!"  
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
        avatar: 'assets/avatar/avatar-rey.png',
        firstname: "Rey",
        lastname: "Zoom",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor",
        sub: 'I can handle myself',
        moto: 'You will remove these restraints and leave.',
      }
    }, {
      id: 0,
      subjectId: 0,
      studentId: 0,
      tutorId: 0,
      starttime: "16:00",
      endtime: "18:00",
      date: "Thursday",
      status: "Pending",
      subjectInfo: {
        id: 0,
        name: "Basic Math (+, -, x, %)",
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
        avatar: 'assets/avatar/avatar-yoda.png',
        firstname: "Jose",
        lastname: "Rizal",
        address: "",
        age: "29",
        phoneNo: "091234123412",
        role: "tutor", 
        sub: 'Scientist',
        moto: 'Nole Me Tangere',
      }
    }]
  }

}
