import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
 @Input() type : string = 'number'
 @Input() inputValue : number = 0
 @Output() inputValueChange = new EventEmitter<number>();
 onValueChange(event: any) {
  this.inputValueChange.emit(Number(event));
}
}
