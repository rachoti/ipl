import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProgressingComponent } from './progressing/progressing.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent, canActivate: [AuthGuard]},
  { path: 'homepage', component: HomepageComponent , canActivate: [AuthGuard] },
  { path: 'progressing', component: ProgressingComponent, canActivate: [AuthGuard] }
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainpageComponent,
    ProgressingComponent,
    LoginComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
