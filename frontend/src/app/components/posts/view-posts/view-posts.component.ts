import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import AppState from '../../../models/app-state.model';
import Post from '../../../models/post.model';
import {Observable} from 'rxjs';
import {GetPostsAction, UpdatePostAction} from '../../../actions/post.actions';
import {Button} from '../../../../../core/button/models/button.model';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  error$: Observable<string>;
  page = 10;
  isNearBottom: boolean;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(store => store.post.posts);
    this.error$ = this.store.select(store => store.post.error);
    this.store.dispatch(new GetPostsAction());
  }

  editPost(post: Post): void {
    console.log('editing this post:::', post);
    this.store.dispatch(new UpdatePostAction(post));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isNearBottom = this.isUserNearBottom();
    console.log('bottom reached', this.isNearBottom);
    if (this.isNearBottom) {
      this.isNearBottom = false;
    }
  }

  private isUserNearBottom(): boolean {
    const threshold = 100;
    const position = window.scrollY + window.innerHeight;
    const height = document.body.scrollHeight;
    return position > height - threshold;
  }
}
