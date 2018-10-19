import { Input, Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';



@Directive({
  selector: '[date]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsValidBirthDay, multi: true}]
})

export class IsValidBirthDay implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    const now = Date.now();
    const today = new Date(now);
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const restrict = new Date(year - 18, month, day);
    const date = new Date(control.value);
    return (date > restrict) ? {'date': {value: control.value}} : null;
  }
}
