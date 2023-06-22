import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch :'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Signup',
    component:SignupComponent
  },
  {
    path:'Signin',
    component:SigninComponent
  },
  {
    path : 'contactUs',
    component:ContactUsComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
