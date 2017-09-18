import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-adsModal',
  templateUrl: 'adsModal.html'
})

export class AdsModalPage {

  tasks: FirebaseListObservable<any[]>;

  public firstParam;
  public secondParam;
  public thirdParam;
  public fourthParam;
  public fifthParam;
  public sixthParam;
  public seventhParam;
  public eigthParam;
  public ninthParam;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    

      this.tasks = db.list('/tasks/Bicycle/');
      

      this.firstParam = navParams.get("firstPassed");
      this.secondParam = navParams.get("secondPassed");
      this.thirdParam = navParams.get("thirdPassed");
      this.fourthParam = navParams.get("fourthPassed");
      this.fifthParam = navParams.get("fifthPassed");
      this.sixthParam = navParams.get("sixthPassed");
      this.seventhParam = navParams.get("seventhPassed");
      this.eigthParam = navParams.get("eigthPassed");
      this.ninthParam = navParams.get("ninthPassed")

  }



}
