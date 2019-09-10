import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.page.html',
  styleUrls: ['./tutor-detail.page.scss'],
})
export class TutorDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doneClicked() {
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['/tabs/tab1'])
  }

}
