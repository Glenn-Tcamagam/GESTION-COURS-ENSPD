import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPost } from '../models/addpost.model';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UpdatePost } from '../models/update-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(data: AddPost) : Observable<Post> {
    return this.http.post<Post>(`${environment.apiBaseUrl}/api/post`, data);
  }

  getAllPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiBaseUrl}/api/post`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiBaseUrl}/api/post/${id}`);
  }

  getPostByUrlHandle(urlHandle: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiBaseUrl}/api/post/${urlHandle}`);
  }

  updatePost(id: string, updatePost: UpdatePost): Observable<Post> {
    return this.http.put<Post>(`${environment.apiBaseUrl}/api/post/${id}`, updatePost);
  }

  deletePost(id: string): Observable<Post>{
    return this.http.delete<Post>(`${environment.apiBaseUrl}/api/post/${id}`);
  }

}
