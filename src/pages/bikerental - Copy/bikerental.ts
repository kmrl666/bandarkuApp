import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { Vendor1Page } from '../vendor1/vendor1';

@Component({
  selector: 'page-bikerental',
  templateUrl: 'bikerental.html'
})
export class BikerentalPage {

    countryRef: any;
    countryList:any;
    loadedCountryList: any;

    houses: FirebaseListObservable<any>;
    house: any[];

    vendor1Page = Vendor1Page;
    // tasks: FirebaseListObservable<any[]>;
    // task: any[];
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {

    	  // this.tasks = db.list('/tasks/Bicycle/VendorList');

this.countryRef = firebase.database().ref('/tasks/Bicycle/');

this.countryRef.on('value', countryList => {
  let countries = [];
  countryList.forEach( country => {
    countries.push(country.val());
  });

  this.countryList = countries;
  this.loadedCountryList = countries;
});


   this.house = [];
  for(let i = 0; i < 5; i++){
  this.house.push({
  text: 'house' + i,
  id: i
  });
  }
  this.houses = db.list('/tasks/Bicycle/');
}

  initializeItems(): void {
  this.countryList = this.loadedCountryList;
}

detailselected(detail) {
  this.navCtrl.push(Vendor1Page,{
  detail: detail


  });
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad BikerentalPage');
  }

}

 // getpusher(){   
 //    var input = document.getElementById("pushing");
 //    var output = input.toString();
 //    return output;
 //  }


