import { Injectable, OnDestroy } from '@angular/core';

interface User {
  name: string,
  age: number
}


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  users: User[] = [
      {name: "Peter", age: 20},
      {name: "Stiliyan", age: 20},
      {name: "Kaloyan", age: 20}
  ];

  ngOnDestroy(): void {
      
  }

  addUserHandler(name: HTMLInputElement, age: HTMLInputElement): void {
    // this.users = [...this.users, {name: name.value, age: Number(age.value)}];
    this.users.push({name: name.value, age: Number(age.value)});
    
    name.value = ""; age.value = "";
  }
}
