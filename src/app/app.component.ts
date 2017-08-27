import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Push, PushToken} from '@ionic/cloud-angular';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push) {
    platform.ready().then(() => {
      
      this.push.register().then((t: PushToken) => {  
        return this.push.saveToken(t);  
    }).then((t: PushToken) => {  
        console.log('Token saved:', t.token);  
    });  

    this.push.rx.notification().subscribe((msg) => {  
        console.log(msg.title + ': ' + msg.text);  
    });  
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
