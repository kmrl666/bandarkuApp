import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { TranslatorPage } from '../translator/translator';
import { RulesPage } from '../rules/rules';
import { EmergencyPage } from '../emergency/emergency';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html'
})
export class MiscPage {

  translatorPage = TranslatorPage;
  rulesPage = RulesPage;
  emergencyPage = EmergencyPage;
  settingsPage = SettingsPage;

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.tasks = db.list('/tasks/Bicycle/Vendor1');

  }

   updateTask(key, amount) {
    this.tasks.update(key, {amount: amount});
    this.showAlert();
      }

 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Bike Availability has been updated.',
      buttons: ['OK']
    });
    alert.present();
  }

}
