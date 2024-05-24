import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {} 

  navTo(path: string) {
    this.router.navigate([path]);    
  }
}
