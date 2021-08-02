import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Post, {UpdatePost} from '../models/post.model';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Button, ButtonType} from '../../../core/button/models/button.model';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private readonly http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>('http://localhost:4000/api/posts');
  }

  updatePost(post: Post): Observable<any> {
    console.log('post', post);
    return this.http.put('http://localhost:4000/api/posts', {post});
  }
}
