import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LocalStorageService, StrengthData } from '../../services/local-storage.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  @Input() selectedExercise: string = '';

  historial: StrengthData[] = [];

  @Output() closeHistorial = new EventEmitter();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.historial = this.localStorageService.getStrengthData(this.selectedExercise) || [];
  }


  onClose() {
    this.historial = [];
    this.closeHistorial.emit();
  }
}
