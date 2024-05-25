import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './theme/main/main.component';
import { ThemesListComponent } from './theme/themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { HomeComponent } from './home/home.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    HomeComponent,
    AddThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
