import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { BikerentalPage } from '../bikerental/bikerental';

@Component({
  selector: 'page-vendor1',
  templateUrl: 'vendor1.html'
})
export class Vendor1Page {

  houses: FirebaseListObservable<any[]>;
   detail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.houses = db.list('/tasks/Bicycle/');
      this.detail = navParams.get('detail');

  }

      ionViewDidLoad() {
    console.log('ionViewDidLoad Vendor1Page');
  }

  openNavDetailsPage(house) {
    this.navCtrl.push(BikerentalPage, { house: house });
  }
  doRefresh($event){
    window.location.reload();
  }

}
