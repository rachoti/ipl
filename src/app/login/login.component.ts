import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../login';
import { AuthService } from '../auth.service';
import $ from "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "admin", password: "admin123" };
  loginForm: FormGroup;
  signUpForm:FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
      //cpassword: ['', Validators.required]
    });
    this.signUpForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password1: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
    this.returnUrl = '/mainpage';
    this.authService.logout();
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get f1() { return this.signUpForm.controls; }

  
  login() {
    if (this.loginForm.invalid) {
      return;
  }
  else{
    if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.f.userid.value);
      this.router.navigate([this.returnUrl]);
    }
    else{
      this.message = "Please check your userid and password";
    }
  }
     
}
signup(){
    
    if (this.signUpForm.invalid) {
      return;
  }
  else{
        if( this.f1.password1.value === this.f1.cpassword.value ){
          console.log("matches successful");
          this.toggleDiv();
        }
        else{
          this.message = "Password doesn`t match";
        }
  }  
}

toggleDiv() {

  var englishDiv = $('#english');
  var hindiDiv = $('#hindi');
    englishDiv.toggle();
    hindiDiv.toggle();
}

}