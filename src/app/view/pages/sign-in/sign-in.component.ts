import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private router: Router
  ) {
    this.signInForm = new FormGroup({
      "email": new FormControl("", [ Validators.required ]),
      "password": new FormControl("", [ Validators.required ])
    });
  }

  ngOnInit(): void {

  }

  public submit(): void {

  }
}
