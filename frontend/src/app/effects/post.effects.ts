import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostService} from '../services/post.service';
import {
  GetPostsAction,
  GetPostsFailAction,
  GetPostsSuccessAction,
  PostActionTypes,
  UpdatePostAction, UpdatePostFailAction,
  UpdatePostSuccessAction
} from '../actions/post.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private readonly actions$: Actions,
              private readonly postService: PostService) {
  }

  @Effect() getPosts$ = this.actions$.pipe(
      ofType<GetPostsAction>(PostActionTypes.GET_POSTS),
      mergeMap(
        () => this.postService.getPosts().pipe(
            map(data => {
              return new GetPostsSuccessAction(data);
            }),
            catchError(error => of(new GetPostsFailAction(error)))
          )
      )
    );

  @Effect() updatePost$ = this.actions$
    .pipe(
      ofType<UpdatePostAction>(PostActionTypes.UPDATE_POST),
      mergeMap(
        (data) => this.postService.updatePost(data.payload)
          .pipe(
            map(data2 => {
              return new UpdatePostSuccessAction(data2);
            }),
            catchError(error => of(new UpdatePostFailAction(error)))
          )
      ),
    );
}
