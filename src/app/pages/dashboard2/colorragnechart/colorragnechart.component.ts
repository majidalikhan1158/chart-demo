import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions, ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-colorragnechart',
  templateUrl: './colorragnechart.component.html',
  styleUrls: ['./colorragnechart.component.scss']
})
export class ColorragnechartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Jan',
          data: this.generateData(20, {
            min: -30,
            max: 55
          })
        },
      ],
      chart: {
        height: 200,
        type: 'heatmap'
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                name: 'low',
                color: '#00A100'
              },
              {
                from: 6,
                to: 20,
                name: 'medium',
                color: '#128FD9'
              },
              {
                from: 21,
                to: 45,
                name: 'high',
                color: '#FFB200'
              },
              {
                from: 46,
                to: 55,
                name: 'extreme',
                color: '#FF0000'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'HeatMap Chart with Color Range'
      }
    };
  }

  public generateData(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x,
        y
      });
      i++;
    }
    return series;
  }
  ngOnInit(): void {
  }

}
