import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
  import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.page.html',
  styleUrls: ['./tutor-detail.page.scss'],
})
export class TutorDetailPage implements OnInit {

  tutor;
  credentials;
  reviews;

  subjectId;
  starttime;
  endtime;
  date;

  balance = 150;

  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.tutor = JSON.parse(this.route.snapshot.paramMap.get('tutor'));
    this.credentials = this.tutor.credentials;
    this.reviews = this.tutor.reviews;
    console.log(this.tutor);
    this.subjectId = this.route.snapshot.paramMap.get('subjectId');
    this.starttime = this.route.snapshot.paramMap.get('starttime');
    this.endtime = this.route.snapshot.paramMap.get('endtime');
    this.date = this.route.snapshot.paramMap.get('date');
  }

  doneClicked() {
    // save to database
    if(this.balance > 150)
      this.presentAlertConfirm();
    else 
      this.presentAlertNotEnoughCredits()
    
  }

  // create no booking because you don't have enough credits

  async presentAlertNotEnoughCredits() {
    const alert = await this.alertController.create({
      header: 'Booking',
      message: "Sorry you don't have enough balance to book.",
      buttons: [
        {
          text: "Ok",
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancelled');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Booking',
      message: 'Are you sure you want to book this tutor?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Booking schedule');
            this.goToHome();
            // this.removeSchedule(this.schedule.id);
          }
        }, {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancelled');
          }
        }
      ]
    });

    await alert.present();
  }

  goToHome() {
    this.router.navigate(['/tabs/tab1'])
  }

}
