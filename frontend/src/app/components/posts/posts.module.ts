import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewPostsComponent} from './view-posts/view-posts.component';
import {PostService} from '../../services/post.service';
import { UpdatePostComponent } from './update-post/update-post.component';
import {ButtonModule} from '../../../../core/button/button.module';
import { ListPostsComponent } from './list-posts/list-posts.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ViewPostsComponent,
    UpdatePostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewPostsComponent
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
