import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule
  ]
})
export class ThemeModule { }
