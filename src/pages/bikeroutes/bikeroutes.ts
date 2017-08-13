import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { ThreePage } from '../three/three';
import { FivePage } from '../five/five';
import { TenPage } from '../ten/ten';

@Component({
  selector: 'page-bikeroutes',
  templateUrl: 'bikeroutes.html'
})
export class BikeroutesPage {

  threePage = ThreePage;
  fivePage = FivePage;
  tenPage = TenPage;

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
