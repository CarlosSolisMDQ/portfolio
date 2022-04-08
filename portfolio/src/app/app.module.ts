import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponentComponent } from './components/homePageComponent/homePageComponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { InterceptorService } from './services/interceptor.service';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { HeaderPortadaEditComponent } from './components/header-portada-edit/header-portada-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ButtonComponent,
    LoginComponent,
    
    HomePageComponentComponent,
         FooterComponent,
         AboutEditComponent,
         EducationEditComponent,
         ExperienceEditComponent,
         ProjectsEditComponent,
         SkillsEditComponent,
         HeaderPortadaEditComponent,
         
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }