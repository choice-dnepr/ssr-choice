import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SharedModule } from '@view/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SignInPageRouting } from './sign-in-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SignInPageRouting,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule { }
