import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IsValidBirthDay } from './birthday.directive';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterationComponent } from './auth/registeration/registeration.component';
import { MainComponent } from './main/main.component';
import { FollowingComponent } from './main/following/following.component';
import { HeadlineComponent } from './main/headline/headline.component';
import { PostsComponent } from './main/posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { SelfComponent } from './main/self/self.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
                               {path: '', redirectTo: 'landing', pathMatch: 'full'}, {path: 'landing', component: AuthComponent},
                               {path: 'landing/login', component: LoginComponent},
                               {path: 'landing/register', component: RegisterationComponent},
                               {path: 'main', component: MainComponent}, {path: 'profile', component: ProfileComponent}
                              ];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterationComponent,
    MainComponent,
    FollowingComponent,
    HeadlineComponent,
    PostsComponent,
    ProfileComponent,
    IsValidBirthDay,
    SelfComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
