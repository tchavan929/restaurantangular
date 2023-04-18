import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {  }
  onSubmit(loginForm: NgForm) {
   console.log(loginForm.value.email);

   this.authService
      .login(loginForm.value.email!, loginForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          //localStorage.setItem('authToken', res.token);
          this.router.navigateByUrl('/home');
          ///this.router.navigate(['about'])
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.errors;
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
