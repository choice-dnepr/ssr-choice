import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireAuthService } from '@core/services/shared/fire-auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public signInForm: FormGroup;
  public hide: boolean = true;
  private wasFirstSubmit: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly authService: FireAuthService
  ) {
    this.signInForm = new FormGroup({
      "email": new FormControl("", {
        validators: [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ],
        updateOn: 'blur'
      }),
      "password": new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ],
        updateOn: 'blur'
      })
    });
  }

  get emailInputInvalid(): boolean {
    return this.checkValidationErrors("email");
  }

  get passwordInputInvalid(): boolean {
    return this.checkValidationErrors("password");
  }

  private checkValidationErrors(inputName: string): boolean {
    const errors = Object.keys(this.signInForm.get(inputName)?.errors || {});
    return !!errors.length && (!!this.signInForm.get(inputName)?.dirty || this.wasFirstSubmit);
  }

  public submit(): void {
    this.wasFirstSubmit = true;
    const email = this.signInForm.get("email")?.value || '';
    const password = this.signInForm.get("password")?.value || '';
    if (this.signInForm.valid) {
      this.authService.signIn(email, password).subscribe(res => {
        console.log(res)
      }, (error) => {
        const errors = error
        
        debugger
      })
    }
  }
}
