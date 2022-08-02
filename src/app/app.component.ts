import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/internal/operators/first';
import { ApiServiceService } from './api-service.service';
import { Post } from './post.class';
// import { Post } from './post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interface-class';
  posts:Post[];
  constructor(private apiService: ApiServiceService){
    this.posts = [];
  }

  ngOnInit(): void {
    this.apiService.getPost().pipe(first()).subscribe((posts: Post[])=>{
      this.posts = posts
      if(this.posts.length > 0){
        lat test = new Post(this.posts[0])
      }
    })
  }
}
