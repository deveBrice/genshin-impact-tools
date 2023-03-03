import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class PasswordValidator {

    public confirmPasswordValidator(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            let control = formGroup.controls[controlName];
            let matchingControl = formGroup.controls[matchingControlName]
            if (
                matchingControl.errors &&
                !matchingControl.errors.confirmPasswordValidator
            ) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmPasswordValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }
}