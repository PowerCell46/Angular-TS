import { Component, Input } from '@angular/core';

interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input("users") userListData: User[] = [];

}
