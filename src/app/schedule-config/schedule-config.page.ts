import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { AddSchedule } from '../actions/schedule.actions';
import { ScheduleState } from './../states/schedule.state';
import { RemoveSchedule } from '../actions/schedule.actions';


@Component({
  selector: 'app-schedule-config',
  templateUrl: './schedule-config.page.html',
  styleUrls: ['./schedule-config.page.scss'],
})
export class ScheduleConfigPage implements OnInit {

  // schedules$: any;   // note id a1: alternative code below. 
  @Select(ScheduleState.getSchedules) schedules$: any;

  constructor(private router: Router, private store: Store) {
    // this.schedules$ = this.store.select(state => state.schedules.schedules)    // Note id a2: continuation from Note id a1.
  }

  ngOnInit() {
  }

  goToNext() {
    console.log("going to next page");
    this.pushPage();
  }

  pushPage() {
    this.router.navigate(['/tabs/tab2/tutor-list', {id: 1}])
  }

  addSchedule(id, subjectId) {
    this.store.dispatch(new AddSchedule({id: id, subjectId: subjectId}))
  }

  removeSchedule(id) {
    this.store.dispatch(new RemoveSchedule(id))
  }
}
