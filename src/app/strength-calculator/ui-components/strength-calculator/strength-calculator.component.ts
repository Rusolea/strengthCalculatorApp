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
  showResultModal = false;
  showCalculator = true;
  showCalculationForm = true;

  weightsStored = false;
  showWeightTable = false;

  resultsSaved = false; //Para evitar que el botón "Guardar resultados" se presione varias veces y se guarden los datos repetidamente,
  showViewWeightsButton = true; //controlar la visibilidad del botón "Ver tabla de pesos"


  constructor(
    private strengthCalculatorService: StrengthCalculatorService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data) {
      this.weightsStored = true;
    }
  }

 /*  onExerciseChange(exercise: string) {
    this.selectedExercise = exercise;
  } */
 /*  onExerciseChange(exercise: string) {
    this.selectedExercise = exercise;
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data) {
      this.weightsStored = true;
    } else {
      this.weightsStored = false;
    }
  } */
  onExerciseChange(selectedExercise: string) {
    this.selectedExercise = selectedExercise;
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data && data.length > 0) {
      this.weightsStored = true;
      if (this.showWeightTable) {
        this.showLastResultWeightTable();
      }
    } else {
      this.weightsStored = false;
      this.showWeightTable = false;
    }
  }



  onModalClose() {
    console.log("Cerrando el modal"); // Mensaje de depuración
    this.oneRM = 0;
    this.showWeightTable = false; // Oculta la tabla de pesos
    this.showCalculationForm = true; // Muestra el formulario para ingresar los pesos
    this.showResultModal = false; // Agrega esta línea para ocultar la tabla de fuerza
  }


  /* onCalculate() {
    this.oneRM = this.strengthCalculatorService.calculateOneRepMax(this.weight, this.repetitions);
    this.strengthTable = this.strengthCalculatorService.generateStrengthTable(this.oneRM);
    this.showResultModal = true;
    this.showCalculator = false;
    this.showCalculationForm = false;
  } */
  onCalculate() {
    this.oneRM = this.strengthCalculatorService.calculateOneRepMax(this.weight, this.repetitions);
    this.strengthTable = this.strengthCalculatorService.generateStrengthTable(this.oneRM);
    this.showResultModal = true;
    this.showCalculator = false;
    this.showCalculationForm = false;
    this.showWeightTable = true; // Añade esta línea para asegurar que la tabla de pesos se muestre
  }


  /* onSaveResults() {
    const currentDate = new Date().toISOString().slice(0, 10);
    this.localStorageService.saveStrengthData(this.selectedExercise, this.weight, this.repetitions, this.oneRM, currentDate);
  } */
  onSaveResults() {
    const currentDate = new Date().toISOString().slice(0, 10);
    this.localStorageService.saveStrengthData(this.selectedExercise, this.weight, this.repetitions, this.oneRM, currentDate);
    this.weightsStored = true;
    this.resultsSaved = true; // Agrega esta línea
  }


  showLastResultWeightTable() {
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data && data.length > 0) {
      const lastData = data[data.length - 1];
      if (lastData && lastData.oneRM) {
        this.strengthTable = this.strengthCalculatorService.generateStrengthTable(lastData.oneRM);
        this.showWeightTable = true;
        this.showCalculationForm = false;
        this.showViewWeightsButton = false; // Añade esta línea
      } else {
        console.error("No hay datos disponibles en el almacenamiento local para el ejercicio seleccionado");
      }
    }
  }

  /* resetCalculator() {
    this.weightsStored = false;
    this.showResultModal = false;
    this.showCalculator = true;
    this.showCalculationForm = true;
  } */
  resetCalculator() {
    this.weightsStored = false;
    this.showResultModal = false;
    this.showCalculator = true;
    this.showCalculationForm = true;
    this.showWeightTable = false; // Añade esta línea para ocultar la tabla de pesos
    this.resultsSaved = false; // Agrega esta línea
    this.oneRM = 0; // Agrega esta línea para ocultar la sección "Resultado del cálculo"
    this.showViewWeightsButton = true; //el botón "Ver tabla de pesos" vuelva a ser visible
  }

  onTerminate() {
    // Reinicia la calculadora de fuerza
    this.selectedExercise = '';
    this.weightsStored = false;
    this.showResultModal = false;
    this.showCalculator = true;
    this.showCalculationForm = false;
    this.showWeightTable = false;
    this.weight = 0;
    this.repetitions = 0;
    this.oneRM = 0;
    this.resultsSaved = false; // Agrega esta línea
    this.showViewWeightsButton = true;//el botón "Ver tabla de pesos" vuelva a ser visible
  }







}
