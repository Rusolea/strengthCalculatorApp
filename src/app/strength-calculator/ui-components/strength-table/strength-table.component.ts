/* import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strength-table',
  templateUrl: './strength-table.component.html',
  styleUrls: ['./strength-table.component.scss']
})
export class StrengthTableComponent implements OnInit {
@Input() strengthTable: { percentage: number, weight: number, reps: number, } [] = [];

constructor() {}

ngOnInit(): void {

}
}
 */

//datos de prueba
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-strength-table',
  templateUrl: './strength-table.component.html',
  styleUrls: ['./strength-table.component.scss']
})
export class StrengthTableComponent implements OnInit {
  @Input() strengthTable: { percentage: number, weight: number, reps: number }[] = [
    { percentage: 100, weight: 80, reps: 12 },
    { percentage: 90, weight: 72, reps: 10 },
    { percentage: 80, weight: 64, reps: 8 },
    { percentage: 70, weight: 56, reps: 6 },
    { percentage: 60, weight: 48, reps: 4 }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('StrengthTableComponent: ngOnInit');
  };
};

