import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeTestComponent } from './home-test/home-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-v17';

  tasks = [
    {name: 'Finish homework', status: "done"},
    {name: 'Throw the trash', status: "todo"},
    {name: 'Watch your lecture', status: "in progress"},
    {name: 'Do your project', status: "done"}
  ]
}
