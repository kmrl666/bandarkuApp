import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransportPage } from '../pages/transport/transport';
import { ParkingPage } from '../pages/parking/parking';
import { HomePage } from '../pages/home/home';
import { PhotosPage } from '../pages/photos/photos';
import { TabsPage } from '../pages/tabs/tabs';
import { StallsPage } from '../pages/stalls/stalls';
import { MiscPage } from '../pages/misc/misc';

import { TenPage } from '../pages/ten/ten';
import { ThreePage } from '../pages/three/three';
import { FivePage } from '../pages/five/five';
import { BikerentalPage } from '../pages/bikerental/bikerental';
import { BikeroutesPage } from '../pages/bikeroutes/bikeroutes';
import { EmergencyPage } from '../pages/emergency/emergency';
import { Event1Page } from '../pages/event1/event1';
import { Event2Page } from '../pages/event2/event2';
import { Event3Page } from '../pages/event3/event3';
import { Event4Page } from '../pages/event4/event4';
import { Event5Page } from '../pages/event5/event5';
import { RulesPage } from '../pages/rules/rules';
import { SettingsPage } from '../pages/settings/settings';
import { TranslatorPage } from '../pages/translator/translator';
import { Vendor1Page } from '../pages/vendor1/vendor1';
import { Vendor2Page } from '../pages/vendor2/vendor2';
import { Vendor3Page } from '../pages/vendor3/vendor3';
import { Vendor4Page } from '../pages/vendor4/vendor4';

import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MyApp,
    TransportPage,
    Vendor2Page,
    ParkingPage,
    HomePage,
    PhotosPage,
    StallsPage,
    MiscPage,
    TenPage,
    ThreePage,
    FivePage,
    BikerentalPage,
    BikeroutesPage,
    EmergencyPage,
    Event1Page,
    Event2Page,
    Event3Page,
    Event4Page,
    Event5Page,
    RulesPage,
    SettingsPage,
    TranslatorPage,
    Vendor1Page,
    Vendor2Page,
    Vendor3Page,
    Vendor4Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransportPage,
    Vendor2Page,
    ParkingPage,
    HomePage,
    PhotosPage,
    StallsPage,
    MiscPage,
    TenPage,
    ThreePage,
    FivePage,
    BikerentalPage,
    BikeroutesPage,
    EmergencyPage,
    Event1Page,
    Event2Page,
    Event3Page,
    Event4Page,
    Event5Page,
    RulesPage,
    SettingsPage,
    TranslatorPage,
    Vendor1Page,
    Vendor2Page,
    Vendor3Page,
    Vendor4Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
