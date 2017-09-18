import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { TranslatorPage } from '../translator/translator';
import { RulesPage } from '../rules/rules';
import { EmergencyPage } from '../emergency/emergency';
import { SettingsPage } from '../settings/settings';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html'
})
export class MiscPage {

  translatorPage = TranslatorPage;
  rulesPage = RulesPage;
  emergencyPage = EmergencyPage;
  settingsPage = SettingsPage;
  feedbackPage = FeedbackPage;

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.tasks = db.list('/tasks/Feedbacks');

  }

   updateTask(key, amount) {
    this.tasks.update(key, {amount: amount});
    this.showAlert();
      }

 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Thank you for your feedback!',
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
            this.tasks.push({
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
