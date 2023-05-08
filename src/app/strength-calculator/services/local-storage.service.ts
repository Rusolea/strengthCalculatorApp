export interface StrengthData {
  weight: number;
  repetitions: number;
  oneRM: number;
  date: string;
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /* saveStrengthData(key: string, weight: number, repetitions: number, oneRM: number, date: string): void {
    const data: StrengthData = {
      weight,
      repetitions,
      oneRM,
      date
    };

  const existingData = this.getStrengthData(key) || [];
    existingData.push(data);

    localStorage.setItem(key, JSON.stringify(existingData));
  } */

  saveStrengthData(key: string, weight: number, repetitions: number, oneRM: number, date: string): void {
    const data: StrengthData = {
      weight,
      repetitions,
      oneRM,
      date
    };

    // Recupera los datos existentes en el Local Storage y convierte la cadena JSON a un array de objetos.
    let existingData: StrengthData[] = this.getStrengthData(key);

    // Agrega el nuevo objeto 'data' al array de objetos existente.
    existingData.push(data);

    // Almacena el array actualizado en el Local Storage como una cadena JSON.
    localStorage.setItem(key, JSON.stringify(existingData));
  }



  /* getStrengthData(key: string): StrengthData[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } */
  getStrengthData(key: string): StrengthData[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }



}
