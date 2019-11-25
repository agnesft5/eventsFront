import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VRegisterComponent } from './v-register/v-register.component';
import { VLoginComponent } from './v-login/v-login.component';
import { VEventsComponent } from './v-events/v-events.component';
import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

const config: Routes = [
  { 'path': 'register', 'component': VRegisterComponent },
  { 'path': 'login', 'component': VLoginComponent },
  { 'path': 'events', 'component': VEventsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VRegisterComponent,
    VLoginComponent,
    VEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(config, { useHash: true }),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
