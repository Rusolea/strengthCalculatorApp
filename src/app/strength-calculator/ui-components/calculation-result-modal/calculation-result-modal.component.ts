import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageService, StrengthData } from '../../services/local-storage.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-calculation-result-modal',
  templateUrl: './calculation-result-modal.component.html',
  styleUrls: ['./calculation-result-modal.component.scss']
})
export class CalculationResultModalComponent {
  @Input() oneRm: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() showTable = new EventEmitter<void>();
  @Output() terminate = new EventEmitter<void>();
  @Output() showHistorial = new EventEmitter<void>();



  constructor(private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }


  onShowTable() {
    this.showTable.emit();
  }

  onTerminate() {
    this.terminate.emit();
  }


  loadData(): void {
    const data: StrengthData[] = this.localStorageService.getStrengthData("strengthData");
    const chartData = {
      labels: [] as string[],
      datasets: [{
        label: 'Peso',
        data: [] as number[]
      }]
    };

    data.forEach((item: StrengthData) => {
      chartData.labels.push(item.date);
      chartData.datasets[0].data.push(item.weight);
    });

    new Chart('canvas', {
      type: 'bar',
      data: chartData,
      options: {
        // Aquí puedes agregar las opciones de configuración del gráfico
      }
    });
  }


}
