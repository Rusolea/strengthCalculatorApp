import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  showHistorial: boolean = false;
  showHistorialButton = false;//étodo para ocultar el historial
  form!: FormGroup;
  resultMessage: string = ''; // Added this line to define resultMessage



  constructor(
    private fb: FormBuilder,
    private strengthCalculatorService: StrengthCalculatorService,
    private localStorageService: LocalStorageService

  ) { }

  ngOnInit(): void {
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data) {
      this.weightsStored = true;
    }

    this.form = this.fb.group({
      weight: ['', [Validators.required, Validators.min(0), Validators.max(300)]],
      repetitions: ['', [Validators.required, Validators.min(1), Validators.max(50)]]
    });

  }


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


  onCalculate() {
    if (this.form.valid) {
      this.weight = this.form.get('weight')?.value; // Get the weight value from the form
      this.repetitions = this.form.get('repetitions')?.value; // Get the repetitions value from the form

      console.log('Weight: ', this.weight);
      console.log('Repetitions: ', this.repetitions);
      console.log('Calculando 1RM...');
      this.oneRM = this.strengthCalculatorService.calculateOneRepMax(this.weight, this.repetitions);
      console.log('1RM calculado: ', this.oneRM);

      // Get the last test result
      const lastResultData = this.strengthCalculatorService.getLastTestResult(this.selectedExercise);// Call the method on 'this.strengthCalculatorService'
       console.log('lastResultData:', lastResultData);
      const lastResult: number | null = lastResultData ? lastResultData.oneRM : null;

      // Determine the result message
      if (lastResult !== null) {
        if (this.oneRM > lastResult) {
          this.resultMessage = '¡Felicitaciones! Mejoraste tu test.';
        } else if (this.oneRM < lastResult) {
          this.resultMessage = 'Parece que tu test es inferior al anterior, ¡sigue esforzándote!';
        } else {
          this.resultMessage = 'Tu test es igual al anterior, ¡sigue intentándolo!';
        }
      } else {
        // Handle case where there is no previous result (lastResult is null)
        this.resultMessage = 'Este es tu primer test!';
      }

      this.strengthTable = this.strengthCalculatorService.generateStrengthTable(this.oneRM);
      this.showResultModal = true;
      this.showCalculator = false;
      this.showCalculationForm = false;
      this.showWeightTable = true;
      this.resultsSaved = false;
    }
  }



  onSaveResults() {
    const currentDate = new Date().toISOString().slice(0, 10);
    this.localStorageService.saveStrengthData(this.selectedExercise, this.weight, this.repetitions, this.oneRM, currentDate);
    this.weightsStored = true;
    this.resultsSaved = true;
    console.log('Guardando resultados, 1RM: ', this.oneRM);

    this.showHistorial = false; // aquí se establece el historial en false
  this.showWeightTable = true; // aquí se establece la tabla de resultados en true
  console.log('El flag showHistorial es ahora', this.showHistorial);
}

  showLastResultWeightTable() {
    const data = this.localStorageService.getStrengthData(this.selectedExercise);
    if (data && data.length > 0) {
      const lastData = data[data.length - 1];
      if (lastData && lastData.oneRM) {
        this.strengthTable = this.strengthCalculatorService.generateStrengthTable(lastData.oneRM);
        this.showWeightTable = !this.showWeightTable;
        this.showCalculationForm = !this.showWeightTable;
        this.showHistorial = false; // Añade esta línea
      } else {
        console.error("No hay datos disponibles en el almacenamiento local para el ejercicio seleccionado");
      }
    }
  }


    resetCalculator() {
      this.weightsStored = false;
      this.showResultModal = false;
      this.showCalculator = false;
      this.showCalculationForm = true;
      this.showWeightTable = false; // Añade esta línea para ocultar la tabla de pesos
      this.resultsSaved = false; // Agrega esta línea
      this.oneRM = 0;
      this.showHistorial = false; // Agrega esta línea para ocultar la sección "Resultado del cálculo"
      this.weight = 0;  // Agrega esta línea
      this.repetitions = 0;  // Agrega esta línea
      /* this.showViewWeightsButton = true; */ //el botón "Ver tabla de pesos" vuelva a ser visible
    }




  onTerminate() {
    // Reinicia la calculadora de fuerza
    this.selectedExercise = '';
    this.weightsStored = false;
    this.showResultModal = false;
    this.showCalculator = false;
    this.showCalculationForm = false;
    this.showWeightTable = false;
    this.weight = 0;
    this.repetitions = 0;
    this.oneRM = 0;
    this.resultsSaved = false; // Agrega esta línea
    this.showViewWeightsButton = false;//el botón "Ver tabla de pesos" vuelva a ser visible
    this.showHistorial = false;
  }

  hideHistorial() {
    this.showHistorial = false;

  }
  showHistorialTable() {
    this.showHistorial = true;
    this.showWeightTable = false;
  }

  onCloseHistorial() {
    console.log('Cerrando historial...');
    this.showHistorial = false;
  }

  get weightErrors() {
    const control = this.form.get('weight');
    if (control && control.touched && control.errors) {
      return control.errors;
    }
    return null;
  }

  get repetitionErrors() {
    const control = this.form.get('repetitions');
    if (control && control.touched && control.errors) {
      return control.errors;
    }
    return null;
  }










}
