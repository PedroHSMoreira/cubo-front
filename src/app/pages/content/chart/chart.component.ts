import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from "chart.js";
import { MultiDataSet, Label, Colors } from "ng2-charts";
import { PartService } from '../../services/part.service';
import { take } from 'rxjs/operators';
import { Participation } from '../../models/participation.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() participations: Participation[]

  doughnutChartType: ChartType = 'doughnut'
  doughnutChartColors: Colors[] = [{
    backgroundColor: [
      'rgba(156, 85, 184, 1)',
      'rgba(234, 75, 53, 1)',
      'rgba(21, 185, 153, 1)',
      'rgba(44, 150, 221, 1)',
      'rgba(189, 195, 199, 1)'
    ]
  }]
  chartOptions: ChartOptions = {
    legend: {
      position: 'right'
    },
    layout: {
      padding: {
        right: 0
      }
    }
  }


  constructor(private partService: PartService) { }

  ngOnInit() {
  }

  labels(): Label[] {
    return this.participations.map(el => `${el.firstName} ${el.lastName}`)
  }

  chartData(): MultiDataSet {
    return this.participations.map(el => el.participation)
  }

}
