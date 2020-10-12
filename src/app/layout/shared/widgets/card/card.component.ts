import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';
import HC_exporting_data from 'highcharts/modules/export-data';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  
  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
    chart: {
      type: 'area',
      margin: [2, 2, 2, 2],
      height: 300
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    tooltip: {
      split: true,
      valueSuffix: ' millions'
    },

    credits: {
      enabled: false
    },

    exporting: {
      enabled: true
    },

    xAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },

    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },

    series: [{
        name: 'Series1',
        data: [0, 1, 4, 9, 16]
    }]
  };

    HC_exporting(this.Highcharts);
    HC_exporting_data(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
