import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASLtranslatorComponent } from './asltranslator/asltranslator.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {MapsComponent} from './maps/maps.component';
import { Map1Component } from './map1/map1.component';
import { VideosComponent } from './videos/videos.component';

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
    path: 'map',
    component: MapsComponent
  },
  {
    path: 'map1',
    component: Map1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
