import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.page.html',
  styleUrls: ['./subject-list.page.scss'],
})
export class SubjectListPage implements OnInit {


  course: any;
  subjects: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.course = JSON.parse(this.route.snapshot.paramMap.get('course'));
    console.log('course: ');
    console.log(this.course);
    this.subjects = this.getAllSubjectsFromCourse(this.course.id);
  }

  pushPage(subject) {
    this.router.navigate(['/tabs/tab2/schedules', {
      subject: JSON.stringify(subject)
    }]);
  }

  subjectSelected(subject) {
    this.pushPage(subject);
  }

  getAllSubjectsFromCourse(courseId) {
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
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
      }, {
        id: 3,
        name: 'History',
        sub: 'Learn History in no time!'
    }]
  }

}
