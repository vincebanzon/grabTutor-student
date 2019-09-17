import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { RemoveSchedule } from '../actions/schedule.actions';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule: any;

  constructor(private route: ActivatedRoute,
    public alertController: AlertController,
    private store: Store,
    private router: Router) { }

  ngOnInit() {
    this.schedule = JSON.parse(this.route.snapshot.paramMap.get('schedule'));
    // this.schedule = this.scheduleModel;
    console.log("schedule");
    console.log(this.schedule);
  }

  cancelClicked() {
    console.log("Cancelling schedule")
    // prompt user for confirmation
    this.presentAlertConfirm()
  }

  async presentAlertTermsAndConditions() {
    const alert = await this.alertController.create({
      header: 'Terms and Conditions',
      message: 'Cancelled booking within the day of schedule is non-refundable. Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Cancelling schedule');
            this.removeSchedule(this.schedule.id);
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cancel',
      message: 'Cancelled booking within the day of schedule is non-refundable. Are you sure you want to cancel?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Cancelling schedule');
            this.removeSchedule(this.schedule.id);
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

  
  removeSchedule(id) {
    this.store.dispatch(new RemoveSchedule(id))
    // TODO: remove from database
    // after cancel, go back to homepage
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['/tabs/tab1'])
  }

  viewTutor() {
    this.router.navigate(["/tabs/tab1/tutor-detail", {tutor: JSON.stringify(this.schedule.tutorInfo)}])
  }

}
