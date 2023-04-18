import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl(),
    password:new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword:new FormControl('', [Validators.required, Validators.minLength(6)]),

  })
  checkPassword(){
    return true;

  }
  onSubmit(){
    console.log(this.registrationForm.value);

  }
}
