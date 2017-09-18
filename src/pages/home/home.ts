import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { AdsModalPage } from '../adsModal/adsModal'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

      this.tasks = db.list('/tasks/Ads/');

  }

  sendInfo(Icon, Name, Type, Organizer, Link, Description, Image, EventDate, Contact){

    this.navCtrl.push(AdsModalPage, {
      firstPassed: Icon,
      secondPassed: Name,
      thirdPassed: Type,
      fourthPassed: Organizer,
      fifthPassed: Link,
      sixthPassed: Description,
      seventhPassed: Image,
      eigthPassed: EventDate,
      ninthPassed: Contact,
    })

    
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
