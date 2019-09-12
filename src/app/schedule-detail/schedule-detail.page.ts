import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule = {
    id: 0,
    subjectId: 0,
    studentId: 0,
    tutorId: 0,
    starttime: "00:00",
    endtime: "00:00",
    date: "September 12, 2019 Thursday",
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
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.schedule = JSON.parse(this.route.snapshot.paramMap.get('schedule'));
    // this.schedule = this.scheduleModel;
    console.log("schedule");
    console.log(this.schedule);
  }

  cancelClicked() {
    console.log("Cancelling schedule")
    // prompt user for confirmation
  }

}
