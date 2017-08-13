import { Component } from '@angular/core';

import { PhotosPage } from '../photos/photos';
import { TransportPage } from '../transport/transport';
import { StallsPage } from '../stalls/stalls';
import { MiscPage } from '../misc/misc';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransportPage;
  tab3Root = PhotosPage;
  tab4Root = StallsPage;
  tab5Root = MiscPage;


  constructor() {

  }
}
