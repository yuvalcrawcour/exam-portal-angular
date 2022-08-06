import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { RegularUserRootComponent } from './components/regular-user/regular-user-root/regular-user-root.component';
import { RootComponent } from './components/general/root/root.component';
import { LoginComponent } from './components/general/login/login.component';
import { HomeComponent } from './components/general/home/home.component';
import { RegisterComponent } from './components/general/register/register.component';
import { AdminRootComponent } from './components/admin/admin-root/admin-root.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { AllQuizesComponent } from './components/admin/all-quizes/all-quizes.component';
import { EditQuizComponent } from './components/admin/edit-quiz/edit-quiz.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { SidebarRegularComponent } from './components/regular-user/sidebar-regular/sidebar-regular.component';
import { JavaPracticesComponent } from './components/regular-user/java-practices/java-practices.component';
import { CodingChallengeComponent } from './components/regular-user/coding-challenge/coding-challenge.component';
import { UserQuizesComponent } from './components/regular-user/user-quizes/user-quizes.component';
import { TakeQuizComponent } from './components/regular-user/take-quiz/take-quiz.component';
import { ProfileComponent } from './components/regular-user/profile/profile.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminRootComponent,
    SidebarComponent,
    AdminHomeComponent,
    AddQuizComponent,
    AllQuizesComponent,
    EditQuizComponent,
    AddQuestionComponent,
    RegularUserRootComponent,
    SidebarRegularComponent,
    JavaPracticesComponent,
    CodingChallengeComponent,
    UserQuizesComponent,
    TakeQuizComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
