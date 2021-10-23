import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASLtranslatorComponent } from './asltranslator/asltranslator.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
