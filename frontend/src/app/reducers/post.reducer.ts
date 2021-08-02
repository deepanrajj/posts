import Post from '../models/post.model';
import {PostAction, PostActionTypes} from '../actions/post.actions';
import {ActionReducerMap} from '@ngrx/store';
import AppState from '../models/app-state.model';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string;
}

const initialPostState: PostState = {
  posts: [],
  loading: false,
  error: ''
};

export function PostsReducer(state: PostState = initialPostState, action: PostAction): PostState {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case PostActionTypes.GET_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PostActionTypes.UPDATE_POST:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.UPDATE_POST_SUCCESS:
      let posts = state.posts.length > 0 ? state.posts : [];
      const updatedPost = action.payload;
      posts = posts.map(post => {
        if (post.id === updatedPost.id) {
          post = updatedPost;
        }
        return post;
      });
      return {
        ...state,
        posts,
        loading: false
      };
    case PostActionTypes.UPDATE_POST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  post: PostsReducer
};
