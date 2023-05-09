import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-selection-modal',
  templateUrl: './exercise-selection-modal.component.html',
  styleUrls: ['./exercise-selection-modal.component.scss']
})
export class ExerciseSelectionModalComponent {
  @Output() exerciseChange = new EventEmitter<string>();
  exercises: { id: string; name: string }[] = [
   /*  { id: 'squat', name: 'Sentadilla' },
    { id: 'bench_press', name: 'Press de banca' },
    { id: 'hip_thrust', name: 'Hip thrust' }, */
    // Agrega más ejercicios aquí
  { id: 'squat', name: 'Sentadilla' },
  { id: 'box_squat', name: 'Media sentadilla con cajón' },
  { id: 'bench_press', name: 'Press de banca' },
  { id: 'hip_thrust', name: 'Hip thrust' },
  { id: 'single_leg_hip_thrust', name: 'Hip thrust a una pierna' },
  { id: 'push_press', name: 'Push press' },
  { id: 'barbell_curl', name: 'Curl de bíceps con barra' },
  { id: 'barbell_shoulder_press', name: 'Press de hombros con barra' },
  { id: 'tricep_extension', name: 'Extensión de tríceps con mancuerna tras nuca' },
  { id: 'pull_up', name: 'Dominadas' },
  { id: 'dumbbell_curl', name: 'Curl de bíceps con mancuernas' },
  { id: 'one_arm_dumbbell_row', name: 'Remo a un brazo con mancuerna' },
  { id: 'lunges', name: 'Estocadas' },
  { id: 'deadlift', name: 'Peso muerto' },
  { id: 'barbell_floor_chest_press', name: 'Press de pecho de suelo con barra' },

  ];
  selectedExercise: string = 'squat';

  onExerciseChange(exerciseId: string) {
    console.log('Ejercicio seleccionado:', exerciseId);
    this.exerciseChange.emit(exerciseId);
    // Aquí puedes agregar la lógica para manejar el cambio en la selección del ejercicio
  }

}
