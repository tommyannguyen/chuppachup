import { Component, ViewChild } from '@angular/core';

import { PopoverController, NavController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { Chart } from 'chart.js';
import { DisplayOption } from 'powerbi-models';
import { Router } from '@angular/router';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  public token = "H4sIAAAAAAAEAB2WxQ7sWBJE_-VtPZKZRuqFmV1m2pnKzOzW_PtU9z51dRUZGXH-_mOlTz-lxZ___qEntc5UsmUeBusPVXauPUZfNFXGae2n50BCihm76q4nPerXrm0tg9JZKNGCSXk54uFCggzCfi_Pr3AImFEFkEhhXdujHKnZ8vosn8nb6rXNZLyD93l5DnLASrqeUeauuFQdvFTVLeWza1_anISE-JJxmHmQLuqOttP1y2yXMRH80QxEHH-vfILa4yKwZxAqYokt-iAFwFo6YaRR-yHJXtuAWJLWD0-huUuSzNfnJYNh8DRkJs3VsuiEVegmP3GKI_fIrHXKPBgbRa3kn-JNpLJOx3nzQHmazOOgjW6YE70yc-oalpHzWVOJ9p5SL_u4MaKRNjZQef0mrl1OEJnduMjChPcc5l6icjFSSmyjCd-tzJac3Ut2822d8YBXAPEvT2OmK61GR5GO5VZ6qtC-p9sb9B3lyOT7SRrtfmcWoEpmjLTWUNV5EJUcYRTETG1JV6apdmY92Town1Ppac0p5tP0Mks741lRRikZ0KvOZkXxWTBAO2pxl-ZFvIxu60jPxgs1JqVsL3iYc9mf33De1N3I4I0eJ77G7LPYki5Z-Xn4EIpqxiM0jyT70j1L6stnuUL-0uWBHjNl8-LuMgXBPKw2-QSClZOUZN5Fv9u31YVu1uxVew6D6R6PwMyvqaw5Ta_dRdpBYhVfOut62k4e-TUDiNdUqalKRj6pQW-9k63JKuEZU5eCqMoPl9DpFWWlT9emwtwDeKju4453DWRdpy7mkZA0Y9hgQSFMltXcR5R5vQghdeN_S_DIsgYjvIMsiYYI5u97YdZd1NDPK_2iYZeed6SNomo5sbTv4LW-1aIcI7QMECeO0vB9Wk2aXwi_YC7H3flrdBpwW-oJ-vn7sYgkdRvcnjm_uKywVAkdUrSwoRb2eccHTj17--i_Awh6F_0kRDviCMif6r66YD2ISHYrqIkhPc6eH45JMmrg3ftjmaQmvPlTiFAjpoiFocfY1U2Y5CV7-twXjuYzDzVHQCy0Aqo-o31h9MdNJAzGWIKv7wIo5q-ydkWrZmgbFW1BdZEAF3671y9yf2rrDFJAlxX5dpeO9YUHR3Auxowcj2CO-eMXUO-B-3G0gKt0xmar489Ne7tQBfLgR8Bp8JNT9v4ssdmF7FIpRqy-WOzGFchZN4gxi496h_sU2OTHC-o7dh_2aX0VPB5PA1vXR3ZJarmPjakjXMI1eCiQi9P8IsDpWExp5YhVzvIQeXkFF8dLlarWRscBeiPpNLjVFnbc2Wsu5vmDJEc2ED2QOkw_VIr3ecpOBpZelTHG9HIXTh5hmkSjctk0oe104pggyG99nexsO3VhXfpYwAbKuLvi5J57kgYO430InXOopB33PXYMcYBYHHbXOUm-JaFpMjrVBottpnL-Whso6SU7uldb7FJhijJkysqxSDjz_fxM8q06zK9vg_Um-07NrOoe0Qxld6NVqCU8xEWAR1S5dxDo43vqEZ8fOqtiNVBY1bTO6GsFx8srulO-qLJRy89Xdp-qRzoacAY_NWCDGikwEeajqLCeow_QURYaRq_hXhwZbswbaEv4-o7rKlw7myUApInLHItznUsOuLjBeze7N0-xPKJEC1l_czZYpVKjM7u4-hKxWVg6IjmHfGOOcMEtaAcxx8NsoCqJl1VTCQlCndLchwY7BtnyEAKji7fxy_YO0iHbqDT3xtbxkbqv1VwLL0FsCxjhqm0JNYKRppueaWb27MrTEPYVEPUzVA-ytMlzFOfWBjYQhiGyaF3LP0SPxFdrrAqzS_NxkzTghKdpITjN-WAui330UycV1ZRuzbe9hIAGR3ErzOVXR0NUyJHoC2dL3X7r3Xp-L0p893lKiSJKsVr8nfD0hiwvfTnYiNmLrgqt7xmPKG7S0p_fg2qvfZBXzbdHDtJ64rdj5IUgyoDnU5g-x7_78jJRJn3Xs0V5HnrP91Z_nSAhKCd2FQ7PBsYBIFaiIKgov1igTURQs69U6oHX48Zr0zaTXc9lrDveGnCsTzaM-1tVWhrlmwhHWg3fAff3u9pHYE3aQIXIHIqMLYd8LRYgUvFT2R6BO3_cVEOhyw4Ww6PpIeG_UT23ASOeNIxAHvRiAEYwGEBUxloDLZgmDudv8xS2OJo_ffYda5y1MNPGkmXCIL-n5hxG06AAOe53gNhF4W3sc7t6J6cylY1SMUXhTgVs3SLKXbxxXu62zBbwjA5JDbvYU8fohaOaIkGNug968w1QZ7Dp9yTJH8HC3yyyDXI7dH_9-c8fbn3mfdLK54cujXTYm9NgUSlmVWugtcozjWJhT8B0ybz29gRI56dOTDmxQPOV1XxuYUfzofaCdg1yYeAuE7j7BL8kmvS0qpp-5jXfchaeM-wBYPydRQz0oQZ8jCNiQwR4Ibh2YBBR659wLxDnBxlC5M3MDTIuGsLUjPRthkfnXSX5ibu8RY-zil7yltJeMSOv9I51nipFxR0fURUOpVmUbSfwvh5GOTgZdlMh-1IiicBvlifEMCMvUb-3mPq6JgcvXg5avyJG_aMi1ZW_YW7tR0bb8gS7wg5vx2FCDAzWn0GSoHoDqyUlP4WrIrzrqKAccL-dEWOrABYFd9aiFvuC8ndd5ZgRc0wMZR3z178yP3NdrkrwU7mu3m8BXeEPlXB9k_n8xp6r-nfKbaox3Y-1_I1ZClrqjLBLF9a0CjTsegbiiF8fPQm7xxgnN1bZNrIwajfI-jqcdh_P2yWH9otEeEauusllX9knjnU28x8q6uhpgDe_6jqfp6Ym-3OnUt-mwkJbyW-_-fHHdxQ_xe_n2Z1Y1jOQFnG7M6m1aPGiL7vE37jslHNJAWMuNikMfkHZjJOG9Yu-U-fhmA7z8RRx45qBZ5vyR76PWQeD_U7pJb_ffxgrpsOK9iJuaXjw9VmSp-ln7IKXdZHUEKIHkJeHd7yLNFArooBsFy0w-2HylkeTpWpFU8gFohnkfETT5ac2SFFfE8S9zlOePYLbQiuhX1xIqpTU6-rL_Zvn7OH8zpxvteYfmf_3fwyOgO2uCwAA";
  constructor(public popoverCtrl: PopoverController, public router: Router) {

  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  @ViewChild('pieChart') pieChart;
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;

  public technologies: any = {
    "technologies": [
      {
        'technology': 'Mobile: Ionic/Angular',
        'time': 50,
        'color': 'rgba(206, 61, 95, 0.5)',
        'hover': 'rgba(199, 108, 129, 0.5)'
      },
      {
        'technology': 'Front-end: Sass/CSS',
        'time': 15,
        'color': 'rgba(83, 131, 185, 0.5)',
        'hover': 'rgba(122, 160, 202, 0.5)'
      },
      {
        'technology': 'Server: PHP/MySQL',
        'time': 10,
        'color': 'rgba(198, 147, 194, 0.5)',
        'hover': 'rgba(200, 166, 197, 0.5)'
      },
      {
        'technology': 'Code Documentation',
        'time': 5,
        'color': 'rgba(54, 116, 152, 0.5)',
        'hover': 'rgba(103, 139, 160, 0.5)'
      },
      {
        'technology': 'Knowledge: Blogging',
        'time': 10,
        'color': 'rgba(152, 54, 145, 0.5)',
        'hover': 'rgba(152, 89, 149, 0.5)',
      },
      {
        'technology': 'SEO/Online Marketing',
        'time': 10,
        'color': 'rgba(192, 192, 192, 0.5)',
        'hover': 'rgba(220, 220, 220, 0.5)'
      }
    ]
  };
  public pieChartEl: any;
  public barChartEl: any;
  public lineChartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];
  public chartLoadingEl: any;


  ngOnInit() {
    console.log('ten ten ten');
    this.defineChartData();
    this.createPieChart();
    this.createBarChart();
    this.createLineChart();
  }



  /**
  *
  * Parse the JSON data, push specific keys into selected arrays for use with
  * each chart
  *
  */
  defineChartData(): void {
    let k: any;

    for (k in this.technologies.technologies) {
      var tech = this.technologies.technologies[k];

      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);
    }
  }




  /**
  *
  * Configure the Pie chart, define configuration options
  *
  */
  createPieChart(): void {
    this.pieChartEl = new Chart(this.pieChart.nativeElement,
      {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Daily Technology usage',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours
          }]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          animation: {
            duration: 5000
          },

        }
      });
    //this.chartLoading = this.pieChartEl.generateLegend();
  }


  /**
  *
  * Configure the Bar chart, define configuration options
  *
  */
  createBarChart(): void {
    this.barChartEl = new Chart(this.barChart.nativeElement,
      {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Daily Technology usage',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: true,
            boxWidth: 80,
            fontSize: 15,
            padding: 0
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 5,
                max: 100
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }




  /**
  *
  * Configure the Line chart, define configuration options
  *
  */
  createLineChart(): void {
    this.lineChartEl = new Chart(this.lineChart.nativeElement,
      {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Daily Technology usage',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours,
            fill: false
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: true,
            boxWidth: 80,
            fontSize: 15,
            padding: 0
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 5,
                max: 100
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }
  public onEmbedded(data: any) {

  }

}
