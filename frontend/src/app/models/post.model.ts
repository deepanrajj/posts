import {FormGroup} from '@angular/forms';
import {Button} from '../../../core/button/models/button.model';

export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UpdatePost {
  editForm: FormGroup;
  initialValue?: Post;
  buttons: Button[];
  submit: (arg0: FormGroup) => void;
}
