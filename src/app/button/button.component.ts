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

@Input() btnName : string = ''
@Input() formula!: (values: number[]) => number;
  @Input() inputValues: number[] = [];
  @Output() onCalculate = new EventEmitter<number>();

  calculate() {
    const result = this.formula(this.inputValues);
    this.onCalculate.emit(result);
  }




}
