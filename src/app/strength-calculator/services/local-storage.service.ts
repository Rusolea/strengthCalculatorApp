import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveStrengthData(key: string, weight: number, repetitions: number, oneRM: number, date: string): void {
  const data = {
    weight,
    repetitions,
    oneRM,
    date
  };

  localStorage.setItem(key, JSON.stringify(data));
}


  getStrengthData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
