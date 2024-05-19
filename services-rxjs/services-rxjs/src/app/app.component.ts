import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'services-rxjs';
 
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    const users = this.userService.getUsers()
    .then(users => console.log(users));
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userService.addUserHandler(inputName, inputAge);
  }
}
