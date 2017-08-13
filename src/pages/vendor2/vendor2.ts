import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-vendor2',
  templateUrl: 'vendor2.html'
})
export class Vendor2Page {

	tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	this.tasks = db.list('/tasks/Bicycle/Vendor2');

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