import { Component, Input } from '@angular/core';

interface User {
  name: string,
  age: number
}


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input("user") userData: User = {} as User;
}
