import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-selection-modal',
  templateUrl: './exercise-selection-modal.component.html',
  styleUrls: ['./exercise-selection-modal.component.scss']
})
export class ExerciseSelectionModalComponent {
  @Output() exerciseChange = new EventEmitter<string>();
  exercises: { id: string; name: string }[] = [
    { id: 'squat', name: 'Sentadilla' },
    { id: 'bench_press', name: 'Press de banca' },
    { id: 'hip_thrust', name: 'Hip thrust' },
    // Agrega más ejercicios aquí
  ];
  selectedExercise: string = 'squat';

  onExerciseChange(exerciseId: string) {
    console.log('Ejercicio seleccionado:', exerciseId);
    this.exerciseChange.emit(exerciseId);
    // Aquí puedes agregar la lógica para manejar el cambio en la selección del ejercicio
  }

}
