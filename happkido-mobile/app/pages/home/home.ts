import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert () {
    let prompt = this.alertCtrl.create({
      title: 'Hi',
      message: 'this course is slow',
      buttons: [{
        text: 'Go Away!'
      }]
    });

    prompt.present();
  }
}
