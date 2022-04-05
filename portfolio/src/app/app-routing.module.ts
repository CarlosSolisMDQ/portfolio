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
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component'
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { HeaderPortadaEditComponent } from './components/header-portada-edit/header-portada-edit.component';

const routes: Routes = [
  {path: 'experienceEdit/:id', component: ExperienceEditComponent},
  {path: '', component: HomePageComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutEdit', component: AboutEditComponent},
  {path: 'educationEdit/:id', component: EducationEditComponent},
  {path: 'skillEdit/:id', component: SkillsEditComponent},
  {path: 'projectEdit/:id', component: ProjectsEditComponent},
  {path: 'editImages', component: HeaderPortadaEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
