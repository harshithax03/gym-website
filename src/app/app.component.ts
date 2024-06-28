import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CommonModule,
            FormsModule,InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';

  result: number = 0;

  //funtion to return list of numbers
  inputArray(n:number): number[] {
    return Array(n)
  }

  // button functionality
  buttons = [
    {
      name: 'Add',
      formula: (a: number, b: number) => a + b
    },
    {
      name: 'Subtract',
      formula: (a: number, b: number) => a - b
    },
    {
      name: 'Multiply',
      formula: (a: number, b: number) => a * b
    },
    {
      name: 'Divide',
      formula: (a: number, b: number) => a / b
    },
    
  ];
  // inputs attributes

  inputs = [
    { value: 0 },
    { value: 0 }
  ];
  // result handling
  handleResult(result: number) {
    this.result = result
  }




}
