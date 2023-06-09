import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationResultModalComponent } from '../ui-components/calculation-result-modal/calculation-result-modal.component';
import { ExerciseSelectionModalComponent } from '../ui-components/exercise-selection-modal/exercise-selection-modal.component';
import { ProgressChartComponent } from '../ui-components/progress-chart/progress-chart.component';
import { StrengthCalculatorComponent } from '../ui-components/strength-calculator/strength-calculator.component';
import { StrengthTableComponent } from '../ui-components/strength-table/strength-table.component';
import { LocalStorageService } from '../services/local-storage.service';
import { StrengthCalculatorService } from '../services/strength-calculator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { HistorialComponent } from '../ui-components/historial/historial.component';



@NgModule({
  declarations: [
    CalculationResultModalComponent,
    ExerciseSelectionModalComponent,
    ProgressChartComponent,
    StrengthCalculatorComponent,
    StrengthTableComponent,
    HistorialComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalStorageService,
    StrengthCalculatorService,
  ],
  exports: [
    StrengthCalculatorComponent
  ]
})
export class StrengthCalculatorModule { }
