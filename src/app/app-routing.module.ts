import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASLtranslatorComponent } from './asltranslator/asltranslator.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PortalComponent } from './portal/portal.component';
import { SigninComponent } from './signin/signin.component';
// import { MapsComponent } from './maps/maps.component';
// import { Map1Component } from './map1/map1.component';

import { MhomeComponent } from './mhome/mhome.component';
import { WebinarComponent } from './webinar/webinar.component';
import { ProfileComponent } from './profile/profile.component';
import { VideosComponent } from './videos/videos.component';
import { PracticetogestureComponent } from './practicetogesture/practicetogesture.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { Manasthitigame1Component } from './manasthitigame1/manasthitigame1.component';
import { Manasthitigame2Component } from './manasthitigame2/manasthitigame2.component';
import { SigngameoneComponent } from './signgameone/signgameone.component';

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
  // {
  //   path: 'map',
  //   component: MapsComponent
  // },
  // {
  //   path: 'map1',
  //   component: Map1Component
  // },
  {
    path: 'mhome',
    component: MhomeComponent
  }, 
  {
    path: 'coursepage',
    component: CoursepageComponent
  },
  {
    path: 'practicetogesture',
    component: PracticetogestureComponent
  },
  {
    path: 'info',
    component: InformationComponent
  },
  {
    path: 'webinar',
    component: WebinarComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'signgameone',
    component: SigngameoneComponent

  },
  {
    path: 'mentally/jeopardy',
    component: Manasthitigame1Component
  },
  {
    path: 'mentally/anatomy',
    component: Manasthitigame2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
