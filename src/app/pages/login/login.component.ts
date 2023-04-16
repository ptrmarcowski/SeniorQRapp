import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginModel } from '../../models/models'
import { MainService } from '../../services/mainService.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class Login implements OnInit{
    loginForm: FormGroup;
    fieldTextType: boolean;
    submitted = false;
    invalidData = false;
    firstTime = false;

    constructor(
      private mainService: MainService, 
      private router: Router,
      private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
    }

    get formValues() { return this.loginForm.controls; }

    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
          return;
        }

        let loginModel = new LoginModel();
        //get data from html
        loginModel.email = this.formValues.email.value;
        loginModel.password = this.formValues.password.value;
        this.mainService.login(loginModel).subscribe(r => {
            if (r.success) {
                this.mainService.setCurrentUserId(r.userId);
                this.firstTime = r.shouldGoToFrom;
                this.firstTime ? this.router.navigateByUrl("/form") : this.router.navigateByUrl("/profile");
                
            } else {
              this.invalidData = true;
            }
        }, (err) => { this.invalidData = true;} )
    }

    togglePassword() {
      this.fieldTextType = !this.fieldTextType;
    }
}
