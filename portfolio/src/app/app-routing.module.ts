import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import {HomePageComponentComponent} from './components/homePageComponent/homePageComponent.component';

const routes: Routes = [
  {path: '', component: HomePageComponentComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
