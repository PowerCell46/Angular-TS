import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from 'src/utils/interfaces';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading:Boolean = true;
  constructor(private api: ApiService) {};

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      this.themes = themes;
      // setTimeout(() => {
        this.isLoading = false;
      //  }, 2000);
    })
  }
}
