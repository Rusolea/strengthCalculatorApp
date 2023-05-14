import { Injectable } from '@angular/core';
import { LocalStorageService, StrengthData } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StrengthCalculatorService {

  constructor(private localStorageService: LocalStorageService ) { }
  // Función para calcular 1RM (One Rep Max) usando la fórmula de Epley
  calculateOneRepMax(weight: number, reps: number): number {
    const oneRm = weight * (1 + reps / 30);
    console.log("calculateOneRepMax: ", oneRm);
    return Math.round(oneRm);
  }


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
    return {
      percentage: Math.round(multiplier * 100), // removido "%"
      weight: weight, // removido " kg"
      reps: index + 1, // agregado "reps"
    };
  });

  return strengthTable;
}

getLastTestResult(exercise: string): StrengthData | null {
  const data = this.localStorageService.getStrengthData(exercise);
  if (data && data.length > 0) {
    return data[data.length - 1]; // Get the last result
  }
  return null; // No results
}
};



