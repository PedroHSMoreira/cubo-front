import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
import { PartService } from '../services/part.service';
import { Participation } from '../models/participation.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  doughnutChartLabels: Label[] = ['Pedro', 'Elisa', 'Letícia', 'Outro', 'teste'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20, 20, 10]
  ];
  doughnutChartType: ChartType = 'doughnut';
  
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

  participations: Participation[]
  
  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.partService.getAll().subscribe(part => this.participations = part)
  }

}
