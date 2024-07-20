import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component';
import { CommonModule, NgFor } from '@angular/common';
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
  // to store the input values
  inputValues: number[] = Array(15)
  result: number = 0;

  numSequence(n: number): number[] { 
    return Array.from({length: n}, (_, i) => i ); 
  } 
  
  // button functionality
  buttons = [
    {
      name: 'Add',
      formula: (args: number[]): number => {
        let sum = 0;
        for (let num of args) {
          sum += num
        }
        console.log(sum)
        return sum;

      },
    },
      {
        name: 'Subtract',
        formula: (args: number[]): number => {
          let sum = 0;
          for (let num of args) {
            sum -= num
          }
          console.log(sum)
          return sum;
  
        }
      },
   
      {
        name: 'Multiply m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m m mbṁṁṁṁṁṁṁmmmmmmmmmmmmmmmmmm                                      x,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',
        formula: (args: number[]): number => {
          let sum = 0;
          for (let num of args) {
            sum *= num
          }
          console.log(sum)
          return sum;
  
        }
      },
      {
        name: 'Divide',
        formula: (args: number[]): number => {
          let sum = 0;
          for (let num of args) {
            sum /= num
          }
          console.log(sum)
          return sum;
  
        }
      },
   
  
    ];

  // result handling
  handleResult(result: number) {
    this.result = result
  }

onValueChange(index: number, value:number){
  this.inputValues[index] = value
}


}
