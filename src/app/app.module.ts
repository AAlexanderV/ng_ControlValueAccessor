import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserNameComponent } from './user-name/user-name.component';
import { PasswordComponent } from './password/password.component';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';



@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    PasswordComponent,
    StrengthIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
