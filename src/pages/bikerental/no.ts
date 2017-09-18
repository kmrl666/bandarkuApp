import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

declare var google;
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

@Component({
  selector: 'page-rentalmap',
  templateUrl: 'rentalmap.html'
})

export class RentalMapPage {
  map: any;
  image: any;
  markers: any = [];
tasks: FirebaseListObservable<any[]>;
public firstParam;
public secondParam;
public thirdParam;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    this.checkme();
    this.firstParam = navParams.get("firstPassed");
    this.secondParam = navParams.get("secondPassed");
    this.thirdParam = navParams.get("secondPassed");

    const that = this;
    setTimeout(function () {
      that.GoogleMap();
    },2000)
  	  this.tasks = db.list('/tasks/Bicycle/');

  }

  checkme(){

    console.log(this.firstParam, this.secondParam, this.thirdParam);

  }
  GoogleMap() {

    var latlng =[[this.firstParam, this.secondParam, this.thirdParam, 2]];
    
    this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: this.secondParam, lng: this.thirdParam}
        });

  var marker, i;
  var infowindow = new google.maps.InfoWindow();

  for (i = 0; i < latlng.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(latlng[i][1], latlng[i][2]),
      label: labels[labelIndex++ % labels.length],
      map: this.map
    }); 
   
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
      infowindow.setContent(latlng[i][0]);
      infowindow.open(this.map, marker);
    }
    })(marker, i));
  }
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
