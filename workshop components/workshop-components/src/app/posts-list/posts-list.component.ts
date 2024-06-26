import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from 'src/utils/interfaces';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}


  ngOnInit(): void {
    this.api.getPosts().subscribe(posts => this.posts = posts)
    // setTimeout(() => {
      this.isLoading = false;
    // }, 2000);
  }
}