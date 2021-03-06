import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

declare var google;
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html'
})

export class ParkingPage {
  map: any;
  image: any;
  markers: any = [];
tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    const that = this;
    setTimeout(function () {
      that.GoogleMap();
    },2000)
  this.tasks = db.list('/tasks/Parking');

  }

  GoogleMap() {

    var latlng = [['Yayasan SHHB', 4.88690139, 114.94057551, 7],
                  ['PGGMB', 4.89016178, 114.94344682, 6],
                  ['Lapau', 4.89365199, 114.94181335, 5],
                  ['Kianggeh', 4.88596603, 114.94956762, 4],
                  ['Pusat Belia', 4.894386, 114.942812, 3],
                  ['Jabatan Elektrik', 4.89054661, 114.94340524, 2], 
                 ['Chung Hwa Middle School', 4.89408225, 114.94395509, 1]];
    this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 4.89016178, lng: 114.94344682}
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
      subTitle: 'Parking has been updated.',
      buttons: ['OK']
    });
    alert.present();
  }

}
