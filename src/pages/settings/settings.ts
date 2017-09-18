import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { AboutUsPage } from '../aboutus/aboutus';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

tasks: FirebaseListObservable<any[]>;
feed: FirebaseListObservable<any[]>;
aboutusPage = AboutUsPage;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

      this.tasks = db.list('/tasks/Version');
      
      this.feed = db.list('/tasks/Feedbacks');

  }

   updateTask(key, amount) {
    this.tasks.update(key, {amount: amount});
    this.showAlert();
      }

 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Feedback has been sent!.',
      buttons: ['OK']
    });
    alert.present();
  }

  addFeedback(){
    let prompt = this.alertCtrl.create({
      title: 'Send a feedback to us!',
      message: "Tell us on what to improve on the app",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail/Name'
        },
        {
          name: 'feedback',
          placeholder: 'Feedback',
          type: 'text'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.feed.push({
              feedback:data.feedback,
              email:data.email
            });
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }


}
