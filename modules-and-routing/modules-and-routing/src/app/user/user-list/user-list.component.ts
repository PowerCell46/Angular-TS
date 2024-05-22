import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/utils/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  isLoading: boolean = false;
  users: User[] = [];


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe(users => this.users=users)  
  }


  fetchUsers() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
