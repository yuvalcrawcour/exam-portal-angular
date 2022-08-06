import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminRootComponent } from './components/admin/admin-root/admin-root.component';
import { AllQuizesComponent } from './components/admin/all-quizes/all-quizes.component';
import { EditQuizComponent } from './components/admin/edit-quiz/edit-quiz.component';
import { HomeComponent } from './components/general/home/home.component';
import { LoginComponent } from './components/general/login/login.component';
import { Page404Component } from './components/general/page404/page404.component';
import { RegisterComponent } from './components/general/register/register.component';
import { CodingChallengeComponent } from './components/regular-user/coding-challenge/coding-challenge.component';
import { JavaPracticesComponent } from './components/regular-user/java-practices/java-practices.component';
import { ProfileComponent } from './components/regular-user/profile/profile.component';

import { RegularUserRootComponent } from './components/regular-user/regular-user-root/regular-user-root.component';
import { TakeQuizComponent } from './components/regular-user/take-quiz/take-quiz.component';
import { UserQuizesComponent } from './components/regular-user/user-quizes/user-quizes.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{
  path: 'welcome-admin', component: AdminRootComponent, children: [
    { path: 'home', component: AdminHomeComponent },
    { path: 'add-quiz', component: AddQuizComponent },
    { path: 'all-quizes', component: AllQuizesComponent },
    { path: 'edit-quiz/:id', component: EditQuizComponent },
    {path: 'add-question/:id', component:AddQuestionComponent}
  ]
},
{
  path: 'welcome-user', component: RegularUserRootComponent, children:[
    {path: 'all-quizes', component: UserQuizesComponent},
    {path: 'take-quiz/:id', component: TakeQuizComponent},
    {path: 'java-practices', component: JavaPracticesComponent},
    {path: 'coding-challenge/:id', component: CodingChallengeComponent},
    {path: 'profile', component: ProfileComponent}

  ]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: Page404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
