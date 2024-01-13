import { Component } from '@angular/core';
import { FooterComponent, FooterModule } from '@coreui/angular-pro';

@Component({
  selector: 'betx-footer',
  templateUrl: './default-footer.component.html',
  standalone: true,
  imports: [FooterModule],
  styleUrls: ['./default-footer.component.scss'],
})
export class DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
