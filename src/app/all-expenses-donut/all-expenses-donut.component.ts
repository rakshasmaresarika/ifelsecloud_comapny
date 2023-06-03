import { Component, ViewChild } from '@angular/core';
import { ApexFill, ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
};

@Component({
  selector: 'app-all-expenses-donut',
  templateUrl: './all-expenses-donut.component.html',
  styleUrls: ['./all-expenses-donut.component.scss']
})
export class AllExpensesDonutComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Shopping", "Workspace", "Food", "Entertainments"],
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 500
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  
}
  
