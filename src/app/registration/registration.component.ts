import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errorMessage: string = '';
  constructor(private registrationService: RegistrationService, private router: Router) {}
  ngOnInit(): void {  }

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl(),
    password:new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword:new FormControl('', [Validators.required, Validators.minLength(6)]),

  })
  checkPassword(){
    return true;

  }
  onSubmit(){
    console.log(this.registrationForm.value);
    //put some validation here
    this.registrationService
    .registeruser(this.registrationForm.value.email!, this.registrationForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log("@res",res);
          //localStorage.setItem('authToken', res.token);
          this.router.navigateByUrl('/home');
          ///this.router.navigate(['about'])
        },
        error: (e) => {
          console.log("@error occured ",e);
          this.errorMessage = e.error;
        },
        complete: () => {
          console.log('complete');
        },
      });

  }
}
