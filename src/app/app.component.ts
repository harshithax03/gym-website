import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CommonModule,
            FormsModule,InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  input:number = environment.inputCount;
  result: number = 0;
  noOfInputs:number = 0;
  inputValues: number[] = Array(this.input).fill(0);
  // button functionality

  buttons = [
    {
      name: 'Add',
      formula: (values: number[]) => values.reduce((acc, curr) => acc + curr, 0)
    },
    {
      name: 'Subtract',
      formula: (values: number[]) => values.reduce((acc, curr) => acc - curr)
    },
    {
      name: 'Multiply',
      formula: (values: number[]) => values.reduce((acc, curr) => acc * curr, 1)
    },
    {
      name: 'Divide',
      formula: (values: number[]) => values.reduce((acc, curr) => acc / curr)
    },
  ];

  // inputs attributes

  updateInputValue(value: number, index: number) {
    this.inputValues[index] = value;
  }

  // Perform calculation based on button formula
  calculate(formula: (values: number[]) => number) {
    this.result = formula(this.inputValues);
  }
  // result handling
  handleResult(result: number) {
    this.result = result
  }




}
