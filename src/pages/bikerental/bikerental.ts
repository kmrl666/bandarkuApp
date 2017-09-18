import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { MapRoutesPage } from '../maproutes/maproutes'

declare var google;
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

@Component({
  selector: 'page-bikerental',
  templateUrl: 'bikerental.html'
})

export class BikerentalPage {
  map: any;
  image: any;
  markers: any = [];
tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.tasks = db.list('/tasks/Bicycle/', {
        query: {
          orderByChild: 'Status',
          equalTo: 'Open'
        }});
      }

  doIT(Name, Longtitude, Latitude)
  {
    console.log(Name, Longtitude, Latitude);
  }
  
  navigate(Name, Longtitude, Latitude) {
    this.navCtrl.push(MapRoutesPage, {
      firstPassed: Name,
      secondPassed: Longtitude,
      thirdPassed: Latitude,
    })

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
