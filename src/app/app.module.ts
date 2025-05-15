import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ButtonComponent } from './button/button.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ButtonComponent,
    UserFormComponent
  ],
  providers: [],
})
export class AppModule {}
