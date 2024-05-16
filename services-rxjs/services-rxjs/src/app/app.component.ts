import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'services-rxjs';
  users: User[] = [{name: "Peter", age: 20}, {name: "Stiliyan", age: 20}, {name: "Kaloyan", age: 20}]

  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = 'Changed from detector!';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }

  addUserHandler(username: string, age: string): void {
    this.users.push({name: username, age: Number(age)});
  }
}
