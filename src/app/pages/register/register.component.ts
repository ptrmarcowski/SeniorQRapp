import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/models';
import { MainService } from 'src/app/services/mainService.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register {
    registerForm: FormGroup;
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
      this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
    }

    get formValues() { return this.registerForm.controls; }

    login() {
        this.submitted = true;
        if (this.registerForm.invalid) {
          return;
        }

        let registerModel = new LoginModel();
        //get data from html
        registerModel.email = this.formValues.email.value;
        registerModel.password = this.formValues.password.value;
        this.mainService.register(registerModel).subscribe(r => {
            if (r.success) {
                this.mainService.setCurrentUserId(r.userId);
                this.firstTime = r.shouldGoToFrom;
                this.firstTime ? this.router.navigateByUrl("/form") : this.router.navigateByUrl("/profile");
                
            } else {
              this.invalidData = true;
            }
        }, (err) => {this.invalidData = true;})
    }

    togglePassword() {
      this.fieldTextType = !this.fieldTextType;
    }
}
