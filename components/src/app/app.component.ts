import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  colorValue = 'yellow'

  onOutputFromChild(inputValue: string): void {
    console.log("from parent:", inputValue);
  }
}
