import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/utils/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  API: string = `https://jsonplaceholder.org/users`
  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<User[]>(this.API);
  }
}
