import {Component, Input, OnInit} from '@angular/core';
import {UpdatePost} from '../../../models/post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  @Input() updatePost: UpdatePost;
  formValid = false;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Check if form control is valid
   * @return boolean
   */
  isValid(key: string): boolean {
    return (this.updatePost.editForm.controls[key].untouched || !this.updatePost.editForm.controls[key].dirty)
      || (this.updatePost.editForm.controls[key].valid
      && this.updatePost.initialValue && this.updatePost.initialValue[key] !== this.updatePost.editForm.controls[key].value);
  }

  checkFormInValid(): boolean {
    console.log(this.updatePost.editForm.touched, this.updatePost.editForm.invalid, !this.formValid);
    return this.updatePost.editForm.untouched || this.updatePost.editForm.invalid && !this.formValid;
  }
}
