import {Component, Input, OnInit, Output, EventEmitter, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Post, {UpdatePost} from '../../../models/post.model';
import {Button, ButtonType} from '../../../../../core/button/models/button.model';
import {PostService} from '../../../services/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  @Input() posts: Post[];
  @Output() editPost = new EventEmitter<Post>();
  modalRef: BsModalRef;
  currentPostEdit: Post;
  updatePostModel: UpdatePost;

  constructor(private readonly modalService: BsModalService,
              private readonly postService: PostService) { }

  ngOnInit(): void {
    this.updatePostModel = this.getUpdatePostModel();
  }

  getUpdatePostModel(): UpdatePost {
    const cancelButton: Button = {
      id: 'cancel_button',
      tooltip: 'Cancel',
      text: 'Cancel',
      type: ButtonType.button,
      onClick: () => {
        this.modalRef.hide();
      }
    };
    const updateButton: Button = {
      id: 'update_button',
      tooltip: 'Update',
      text: 'Update',
      type: ButtonType.submit,
      disableOnInvalidForm: true
    };
    const editForm = new FormGroup({
      title: new FormControl('', [Validators.nullValidator, Validators.required]),
      body: new FormControl('', [Validators.nullValidator, Validators.required])
    });

    return {
      editForm,
      submit: () => {
        this.modalRef.hide();
        const payload = {...this.updatePostModel.initialValue, ...editForm.value};
        this.editPost.emit(payload);
      },
      buttons: [cancelButton, updateButton]
    };
  }

  setupEditButton(template: TemplateRef<any>, post: Post): Button {

    return {
      id: `edit_button_${post.id}`,
      iconClassName: 'icon-pencil',
      onClick: () => {
        console.log('post', post);
        this.updatePostModel = null;
        this.updatePostModel = this.getUpdatePostModel();
        this.currentPostEdit = post;
        this.updatePostModel.initialValue = post;
        this.updatePostModel.editForm.patchValue({title: post.title, body: post.body});
        this.modalRef = this.modalService.show(template);
      }
    };
  }
}
