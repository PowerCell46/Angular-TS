import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services-rxjs';
 
  constructor(public userService: UserService) {}

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userService.addUserHandler(inputName, inputAge);
  }
}
