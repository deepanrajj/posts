import {Action} from '@ngrx/store';
import Post from '../models/post.model';

export enum PostActionTypes {
  GET_POSTS = '[POST] Get Posts',
  GET_POSTS_SUCCESS = '[POST] Get Posts Success',
  GET_POSTS_FAIL = '[POST] Get Posts Fail',
  UPDATE_POST = '[POST] Update Post',
  UPDATE_POST_SUCCESS = '[POST] Update Posts Success',
  UPDATE_POST_FAIL = '[POST] Update Posts Fail'
}

// Get posts
export class GetPostsAction implements Action {
  readonly type = PostActionTypes.GET_POSTS;
}

export class  GetPostsSuccessAction implements Action {
  readonly type = PostActionTypes.GET_POSTS_SUCCESS;
  constructor(public payload: Post[]) {
  }
}

export class  GetPostsFailAction implements Action {
  readonly type = PostActionTypes.GET_POSTS_FAIL;
  constructor(public payload: string) {
  }
}

// Update post
export class UpdatePostAction implements Action {
  readonly type = PostActionTypes.UPDATE_POST;
  constructor(public payload: Post) {
  }
}

export class  UpdatePostSuccessAction implements Action {
  readonly type = PostActionTypes.UPDATE_POST_SUCCESS;
  constructor(public payload: Post) {
  }
}

export class  UpdatePostFailAction implements Action {
  readonly type = PostActionTypes.UPDATE_POST_FAIL;
  constructor(public payload: string) {
  }
}

export type PostAction =
  GetPostsAction |
  GetPostsSuccessAction |
  GetPostsFailAction |
  UpdatePostAction |
  UpdatePostSuccessAction |
  UpdatePostFailAction;
