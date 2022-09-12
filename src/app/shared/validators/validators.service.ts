import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  
  // Aquí se definen validación del email y la contraseña a nivel global
  public userEmailPattern : string = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  public userPasswordPattern : string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  
  constructor() { }

  equalFields(field1:string,field2:string){
    return (formGroup:AbstractControl) : ValidationErrors | null => {
      const value1 = formGroup.get(field1)?.value;
      const value2 = formGroup.get(field2)?.value;
      
      formGroup.get(field2)?.setErrors(null);

      if(value1 !== value2) {
        formGroup.get(field2)?.setErrors({notEquals:true});
        return { notEqual: true}
      }
      return null;
    }
  }
}
