import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.schedule = JSON.parse(this.route.snapshot.paramMap.get('schedule'));
    console.log("schedule");
    console.log(this.schedule);
  }

}
