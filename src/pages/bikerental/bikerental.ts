import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { Vendor1Page } from '../vendor1/vendor1';
import { Vendor2Page } from '../vendor2/vendor2';
import { Vendor3Page } from '../vendor3/vendor3';
import { Vendor4Page } from '../vendor4/vendor4';

@Component({
  selector: 'page-bikerental',
  templateUrl: 'bikerental.html'
})
export class BikerentalPage {

  vendor1Page = Vendor1Page;
  vendor2Page = Vendor2Page;
  vendor3Page = Vendor3Page;
  vendor4Page = Vendor4Page;

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

    	  this.tasks = db.list('/tasks/Bicycle/VendorList');
}
 getpusher(){   
    var input = document.getElementById("pushing");
    var output = input.toString();
    return output;
  }

}
