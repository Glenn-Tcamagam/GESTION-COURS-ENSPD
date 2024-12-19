import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts$?: Observable<Post[]>;
constructor(private postService: PostService){}

ngOnInit(): void {
  // get all blog posts from API
  this.posts$ = this.postService.getAllPosts();


}
}