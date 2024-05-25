
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/utils/constants';
import { Post, Theme } from 'src/utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getThemes() {
    return this.http.get<Theme[]>(`${baseUrl}/themes`);
  }

  public getPosts(limit?: number) {
    return this.http.get<Post[]>(`${baseUrl}/posts`);
  }
}
