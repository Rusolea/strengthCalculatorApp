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


 // Función para generar una tabla de pesos y repeticiones
 generateStrengthTable(oneRepMax: number): { reps: number, percentage: number, weight: number }[] {
  const table = [];
  for (let reps = 1; reps <= 12; reps++) {
    const percentage = Math.round(100 * (1 - (reps - 1) * 0.025));
    const weight = Math.round(oneRepMax * (1 - (reps - 1) * 0.025));
    table.push({ reps, percentage, weight });
  }
  return table;
}


}
