import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType, LabelItem } from 'chart.js';
import { LocalStorageService } from '../../services/local-storage.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private cdr: ChangeDetectorRef) { }

  barChartLabels: LabelItem[] = [];
  barChartData: ChartDataset[] = [{ data: [], label: '1RM' }];
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {/* Opciones de la gráfica */};
  selectedExercise: string = ""; // Añadir esta propiedad.

  ngOnInit(): void {
    console.log('ProgressChartComponent: ngOnInit');
    this.loadData();
  }

  loadData() {
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data) {
      this.barChartLabels = data.map((record: any) => record.date);
      this.barChartData[0].data = data.map((record: any) => record.oneRM);
    }
  }

}
