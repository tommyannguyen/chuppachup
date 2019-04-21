import { Component } from '@angular/core';
import { PowerBiService, ISampleReportInfo } from '../../providers/powerbi.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Events, Platform } from '@ionic/angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  reportInfo: ISampleReportInfo;
  constructor(public powerBiService: PowerBiService,
    private screenOrientation: ScreenOrientation, private events: Events ,
    private plt: Platform) {

  }
  ionViewWillEnter() {
    this.events.publish('page:about');
    var load = this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then(() => {
      window.dispatchEvent(new Event('resize'));
    });
    this.loadPowerBiData();
  }
  loadPowerBiData() {
    this.powerBiService.getReportInfo().subscribe(data => {
      this.reportInfo = data;
    });
  }
}
