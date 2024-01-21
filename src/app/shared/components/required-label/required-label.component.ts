import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'betx-required-label',
  templateUrl: './required-label.component.html',
  styleUrls: ['./required-label.component.css'],
  standalone: true,
})
export class RequiredLabelComponent {
  @Input() text: string = '';
}
