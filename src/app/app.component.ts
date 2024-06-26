import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gymate';
}
