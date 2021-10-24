import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASLtranslatorComponent } from './asltranslator/asltranslator.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { VideosComponent } from './videos/videos.component';
import { PracticetogestureComponent } from './practicetogesture/practicetogesture.component';
import { CoursepageComponent } from './coursepage/coursepage.component';

const routes: Routes = [
  // {
  //   path: 'navbar',
  //   component: NavbarComponent
  // },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'asltranslator',
    component: ASLtranslatorComponent
  },
  {
    path: 'video',
    component: VideosComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'coursepage',
    component: CoursepageComponent
  },
  {
    path: 'practicetogesture',
    component: PracticetogestureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
