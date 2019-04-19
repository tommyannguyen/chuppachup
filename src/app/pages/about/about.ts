import { Component, ViewChild } from '@angular/core';

import { PopoverController, NavController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { Chart } from 'chart.js';
import { DisplayOption } from 'powerbi-models';
import { Router } from '@angular/router';
import { PowerBiService, ISampleReportInfo } from '../../providers/powerbi.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  reportInfo: ISampleReportInfo;
  strData: string;
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


  constructor(public popoverCtrl: PopoverController, public powerBiService: PowerBiService) {

  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loadPowerBiData();
    this.defineChartData();
    this.createPieChart();
    this.createBarChart();
    this.createLineChart();
  }
  loadPowerBiData() {
    this.powerBiService.getReportInfo().subscribe(data => {
      this.reportInfo = data;
      this.strData = JSON.stringify(data);
    });
  }
  defineChartData(): void {
    let k: any;

    // tslint:disable-next-line:forin
    for (k in this.technologies.technologies) {
      // tslint:disable-next-line:prefer-const
      const tech = this.technologies.technologies[k];

      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);
    }
  }
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
