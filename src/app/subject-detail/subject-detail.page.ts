import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss'],
})
export class SubjectDetailPage implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id: ', this.id);
  }

}
