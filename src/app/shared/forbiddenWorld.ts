import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { worldBanned } from "../constants";



export const forbiddenWorldValidator: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    const usuario = control.value;
    return usuario === worldBanned ? { forbiddenWorldValidator : { value : usuario }} : null;
}