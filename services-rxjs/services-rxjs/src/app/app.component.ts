import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services-rxjs';
  users: User[] = [{name: "Peter", age: 20}, {name: "Stiliyan", age: 20}, {name: "Kaloyan", age: 20}]



  addUserHandler(name: HTMLInputElement, age: HTMLInputElement): void {
    // this.users = [...this.users, {name: name.value, age: Number(age.value)}];
    this.users.push({name: name.value, age: Number(age.value)});
    
    name.value = ""; age.value = "";
  }
}
