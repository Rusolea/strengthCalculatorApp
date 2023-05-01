import { Component, OnInit } from '@angular/core';
import { StrengthCalculatorService } from '../../services/strength-calculator.service';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-strength-calculator',
  templateUrl: './strength-calculator.component.html',
  styleUrls: ['./strength-calculator.component.scss']
})
export class StrengthCalculatorComponent implements OnInit {
  selectedExercise: string = '';
  weight: number = 0;
  repetitions: number = 0;
  oneRM: number = 0;
  strengthTable: any[] = [];

  constructor(
    private strengthCalculatorService: StrengthCalculatorService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {

  }

  onExerciseChange(exercise: string) {
    this.selectedExercise = exercise;
  }

  onCalculate() {
    this.oneRM = this.strengthCalculatorService.calculateOneRepMax(this.weight, this.repetitions);
    this.strengthTable = this.strengthCalculatorService.generateStrengthTable(this.oneRM);
  }

  onSaveResults() {
    const currentDate = new Date().toISOString().slice(0, 10);
    this.localStorageService.saveStrengthData(this.selectedExercise, this.weight, this.repetitions, this.oneRM, currentDate);
  }

}
