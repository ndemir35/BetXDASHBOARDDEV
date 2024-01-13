import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class FormComponentBase {
  isSubmitted = false;
  form?: FormGroup;

  submitForm() {
    this.isSubmitted = true;
  }
}
