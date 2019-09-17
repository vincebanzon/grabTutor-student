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
    if(!this.course) {
      this.course = [];
    }
    console.log('course: ');
    console.log(this.course);
    this.subjects = this.getAllSubjectsFromCourse(this.course.id);
  }

  pushPage(subject) {
    this.router.navigate(['/tabs/tab2/schedule-config', {
      subjectId: subject.id
    }]);
  }

  subjectSelected(subject) {
    this.pushPage(subject);
  }

  getAllSubjectsFromCourse(courseId) {
    return [{
        id: 0,
        name: 'Basic Math (+, -, x, %)',
        sub: 'Learn Math in no time!'
      }, {
        id: 1,
        name: 'Addition',
        sub: 'Learn Addition in no time!'
      }, {
        id: 2,
        name: 'Subtraction',
        sub: 'Learn how to subtract in no time!'
      }, {
        id: 3,
        name: 'Basic Algebra',
        sub: 'Learn the basics in Algebra.'
      }, {
        id: 4,
        name: 'Advanced Algebra',
        sub: "Learn the in's and out's of Algebra."
      }, {
        id: 5,
        name: 'Basic Calculus',
        sub: 'Learn the basic in calculus.'
      }, {
        id: 6,
        name: 'Advanced Calculus',
        sub: 'Learn the calculus in different way.'
      }, {
        id: 7,
        name: 'Calculus for beginners',
        sub: "If you don't know a thing in calculus yet, take this subject."
      }, {
        id: 8,
        name: 'Calculus for experts',
        sub: 'Do you want to be an expert in calculus?'
      }, {
        id: 9,
        name: 'Surface Area',
        sub: 'Learn how to calculate Surface Area.'
      }, {
        id: 10,
        name: 'Calculating Volume of an object',
        sub: 'Learn how to calculate volume of an object.'
    }]
  }

}
