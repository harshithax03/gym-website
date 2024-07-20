import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CommonModule,
            FormsModule,InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class AppComponent {
<<<<<<< HEAD
  title = 'Calculator';
  // to store the input values
  inputValues: number[] = Array(15)
  result: number = 0;

  numSequence(n: number): number[] { 
    return Array.from({length: n}, (_, i) => i ); 
  } 
  
=======
  private input:number = environment.inputCount;
  result: number = 0;
  noOfInputs:number = 0;
  inputValues: number[] = Array(this.input).fill(0);
  // data = names
  // name!: string
 
>>>>>>> 107f711a53636792bcd00bcfa9ed84177570bc45
  // button functionality

  buttons = [
    {
      name: 'Add',
<<<<<<< HEAD
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
=======
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
>>>>>>> 107f711a53636792bcd00bcfa9ed84177570bc45

  // inputs attributes

  updateInputValue(value: number, index: number) {
    // console.log(value, index);
    this.inputValues[index] = value;
    console.log(this.inputValues)
  }

  // Perform calculation based on button formula
  calculate(formula: (values: number[]) => number) {
    this.result = formula(this.inputValues);
  }
  // result handling
  handleResult(result: number) {
    this.result = result
  }

onValueChange(index: number, value:number){
  this.inputValues[index] = value
}


}
