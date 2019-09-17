import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  doneClicked() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm",
      message: "Please confirm to continue.",
      buttons: [{
        text: 'Confirm',
        cssClass: "secondary",
        handler: () => {
          // this.goToProfile();
          console.log("Submit payment");
          this.presentAlertTransactionError();
        }
      }, {
        text: "Cancel",
        role: "cancel",
        handler: (blah) => {
          console.log("Confirm Cancelled");
        }
      }]
    });
    
    await alert.present();
  }

  async presentAlertTransactionError() {
    const alert = await this.alertController.create({
      header: "Failed",
      message: "Transaction failed. Please try again later.",
      buttons: [{
        text: "Ok",
        role: 'cancel',
        handler: (blah) => {
          console.log("Failed ok");
        }
      }]
    })

    await alert.present();
  }

  goToProfile() {
    this.router.navigateByUrl("/tabs/tab3");
  }
}
