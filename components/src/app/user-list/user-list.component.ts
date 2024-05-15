import { Component } from '@angular/core';


interface User {
  name: string,
  age: number,
  status: "active" | "innactive"
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {name: "Peter", age: 20, status: "active"},
    {name: "Stiliyan", age: 20, status: "active"},
    {name: "Ivan", age: 16, status: "active"},
    {name: "Kristiyan", age: 24, status: "innactive"},
    {name: "Kaloyan", age: 20, status: "innactive"},
  ];
}
