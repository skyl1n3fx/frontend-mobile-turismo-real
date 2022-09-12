import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent {
  @Input() label: string = 'Enviar';
  @Input() disabled:boolean = false;
  @Input() type: string = 'submit';
}
