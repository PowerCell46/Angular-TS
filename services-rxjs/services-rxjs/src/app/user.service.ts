import { Injectable, OnDestroy } from '@angular/core';
import { User } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  users: User[] = [
  ];

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
       
  }

  addUserHandler(name: HTMLInputElement, age: HTMLInputElement): void {
    // this.users = [...this.users, {name: name.value, age: Number(age.value)}];
    this.users.push({name: name.value, age: Number(age.value)});
     
    name.value = ""; age.value = "";
  }


  getUsers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/ `)
    // return fetch(`https://jsonplaceholder.typicode.com/users/`)
    // .then(res => res.json())
  }
}
