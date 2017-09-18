import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { StallsMapPage } from '../stallsmap/stallsmap'


@Component({
  selector: 'page-stalls',
  templateUrl: 'stalls.html'
})
export class StallsPage {

tasks: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

  	  this.tasks = db.list('/tasks/Stall', {
        query: {
          orderByChild: 'Name',
        }
      });

  }
  


  ionViewWillEnterType(){
    this.myDefaultMethodToFetchDataType();
}

refreshType() {
this.ionViewWillEnterType();
}

myDefaultMethodToFetchDataType()
{
    this.tasks = this.db.list('/tasks/Stall', {
      query: {
        orderByChild: 'Type',
        
      }
    });
  }
    

    ionViewWillEnterVendor(){
      this.myDefaultMethodToFetchDataVendor();
  }
  
  refreshVendor() {
  this.ionViewWillEnterVendor();
  }
  
  myDefaultMethodToFetchDataVendor()
  {
      this.tasks = this.db.list('/tasks/Stall', {
        query: {
          orderByChild: 'Name',
          
        }
      });
    
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

  navigate(Name, Longtitude, Latitude) {
    this.navCtrl.push(StallsMapPage, {
      firstPassed: Name,
      secondPassed: Longtitude,
      thirdPassed: Latitude,
    })
  }

}
