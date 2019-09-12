import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.page.html',
  styleUrls: ['./tutor-detail.page.scss'],
})
export class TutorDetailPage implements OnInit {

  tutor;
  credentials;

  subjectId;
  starttime;
  endtime;
  date;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tutor = JSON.parse(this.route.snapshot.paramMap.get('tutor'));
    this.credentials = this.tutor.credentials;
    console.log(this.tutor);
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.starttime = this.route.snapshot.paramMap.get('starttime');
    this.endtime = this.route.snapshot.paramMap.get('endtime');
    this.date = this.route.snapshot.paramMap.get('date');
  }

  doneClicked() {
    // save to database
     
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['/tabs/tab1'])
  }

}
