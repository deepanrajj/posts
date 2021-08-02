import {Component, Input} from '@angular/core';
import {Button} from './models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button!: Button;
  @Input() disabled = false;
}
