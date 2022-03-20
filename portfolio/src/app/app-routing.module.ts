import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import {HomePageComponentComponent} from './components/homePageComponent/homePageComponent.component';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import {ExperienceEditComponent} from './components/experience-edit/experience-edit.component'

const routes: Routes = [
  {path: 'experienceEdit/:id', component: ExperienceEditComponent},
  {path: '', component: HomePageComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutEdit', component: AboutEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
