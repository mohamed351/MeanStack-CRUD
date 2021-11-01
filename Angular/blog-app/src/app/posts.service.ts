import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Posts } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>(environment.baseURL + "/posts");
  }
  addPost(Posts: Posts) {
    return this.http.post(environment.baseURL + "/posts", Posts);
  }
  getByID(id: string) {
    return this.http.get<Posts>(environment.baseURL + `/posts/${id}`)
  }
  editPost(id: string, post: Posts) {
    return this.http.put(environment.baseURL + `/posts/${id}`, post);
  }
  deletePostByID(id: string) {
    return this.http.delete(environment.baseURL + `/posts/${id}`)
  }


}
