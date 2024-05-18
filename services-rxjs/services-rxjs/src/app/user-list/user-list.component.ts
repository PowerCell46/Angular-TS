import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input("users") userListData: User[] = [];
  // constructor(private cd: ChangeDetectorRef) {
  // setTimeout(() => {
  //   this.title = 'Changed from detector!';
  //   this.cd.detectChanges();
  // }, 3000);

  //   setInterval(() => {
  //     this.cd.detectChanges();  
  //     console.log("CHANGES");
      
  //   }, 3000);
  // }
}
