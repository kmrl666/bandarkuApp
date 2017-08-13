import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { BikerentalPage } from '../bikerental/bikerental';
import { BikeroutesPage } from '../bikeroutes/bikeroutes';
import { ParkingPage } from '../parking/parking';


@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html'
})
export class TransportPage {
  bikerentPage = BikerentalPage;
  bikeroutesPage = BikeroutesPage;
  parkingPage = ParkingPage;


  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  }

}
