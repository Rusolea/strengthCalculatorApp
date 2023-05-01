import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrengthCalculatorService {

  constructor() { }
  // Función para calcular 1RM (One Rep Max) usando la fórmula de Epley
  calculateOneRepMax(weight: number, reps: number): number {
    return weight * (1 + reps / 30);
  }


 // Función para generar una tabla de pesos y repeticiones
 generateStrengthTable(oneRepMax: number): { weight: number, reps: number }[] {
  const table = [];
  for (let i = 1; i <= 12; i++) {
    const weight = oneRepMax * (1 - i * 0.025);
    const reps = Math.floor(30 / i);
    table.push({ weight, reps });
  }
  return table;
}
}
