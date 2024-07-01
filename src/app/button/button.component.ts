import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 title = 'Button'
 // button input
// @Input() btnName : string = ''
// @Input() formula : (a:number, b:number) => number = () =>0
// @Input() num1 : number = 0
// @Input() num2 : number = 0
// @Output() onCalculate = new EventEmitter<number>()
// calculate() {
//     const result = this.formula(this.num1, this.num2) 
//     this.onCalculate.emit(result);  
// }
  






}
