import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom Validator Function
export function minDateValidator(minDate: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const inputDate = control.value;

    // Check if the control value is provided and is a valid date
    if (inputDate && inputDate instanceof Date && !isNaN(inputDate.getTime())) {
      // Compare the input date with the minimum date
      return inputDate < minDate ? { minDate: true } : null;
    }

    // If the input is not a valid date, return validation error
    return null;
  };
}
