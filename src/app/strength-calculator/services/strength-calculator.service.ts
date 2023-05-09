import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrengthCalculatorService {

  constructor() { }
  // Función para calcular 1RM (One Rep Max) usando la fórmula de Epley
  calculateOneRepMax(weight: number, reps: number): number {
    const oneRm = weight * (1 + reps / 30);
    return Math.round(oneRm);
  }


 /* // Función para generar una tabla de pesos y repeticiones
 generateStrengthTable(oneRepMax: number): { reps: number, percentage: number, weight: number }[] {
  const table = [];
  for (let reps = 1; reps <= 12; reps++) {
    const percentage = Math.round(100 * (1 - (reps - 1) * 0.025));
    const weight = Math.round(oneRepMax * (1 - (reps - 1) * 0.025));
    table.push({ reps, percentage, weight });
  }
  return table;
}
 */
/* generateStrengthTable(oneRM: number) {
  const multipliers = [
    1,
    0.95,
    0.9,
    0.88,
    0.86,
    0.83,
    0.8,
    0.78,
    0.76,
    0.75,
    0.72,
    0.7,
    0.62,
    0.58,
    0.56,
  ];

  const strengthTable = multipliers.map((multiplier, index) => {
    const weight = oneRM * multiplier;
    const repetitions = index + 1;
    return {
      percentage: Math.round(multiplier * 100) + "%",
      weight: Math.round(weight) + " kg",
      repetitions: repetitions,
    };
  });

  return strengthTable;
}


}
 */
generateStrengthTable(oneRM: number) {
  const multipliers = [
    1,
    0.95,
    0.9,
    0.88,
    0.86,
    0.83,
    0.8,
    0.78,
    0.76,
    0.75,
    0.72,
    0.7,
    0.62,
    0.58,
    0.56,
  ];

  const roundToInterval = (value: number, interval: number) => {
    return Math.round(value / interval) * interval;
  };

  const strengthTable = multipliers.map((multiplier, index) => {
    let weight = oneRM * multiplier;
    weight = weight < 10 ? roundToInterval(weight, 1) : roundToInterval(weight, 2.5);
    const repetitions = index + 1;
    return {
      percentage: Math.round(multiplier * 100) + "%",
      weight: weight + " kg",
      repetitions: repetitions,
    };
  });

  return strengthTable;
};
}
