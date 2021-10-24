import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForumComponent } from './forum/forum.component';
import { ASLtranslatorComponent } from './asltranslator/asltranslator.component';
import { VideosComponent } from './videos/videos.component';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { MapsComponent } from './maps/maps.component';
import { Map1Component } from './map1/map1.component';
import { MhomeComponent } from './mhome/mhome.component';
=======
import { PracticetogestureComponent } from './practicetogesture/practicetogesture.component';
import { CoursepageComponent } from './coursepage/coursepage.component'
import { InformationComponent } from './information/information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManasthitihomeComponent } from './manasthitihome/manasthitihome.component';
import { ManasthitinavbarComponent } from './manasthitinavbar/manasthitinavbar.component';
import { Game1Component } from './game1/game1.component';
// import { WebinarComponent } from './webinar/webinar.component';
// import { PortalComponent } from './portal/portal.component';
// import { ProfileComponent } from './profile/profile.component'
>>>>>>> d6997f0b38d782ee3c37722fadfff44b898303dc
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    ASLtranslatorComponent,
    VideosComponent,
    SigninComponent,
    HomeComponent,
<<<<<<< HEAD
    MapsComponent,
    Map1Component,
    MhomeComponent
=======
    PracticetogestureComponent,
    CoursepageComponent,
    InformationComponent,
    ManasthitihomeComponent,
    ManasthitinavbarComponent,
    Game1Component
    // WebinarComponent,
    // PortalComponent,
    // ProfileComponent
>>>>>>> d6997f0b38d782ee3c37722fadfff44b898303dc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    NoopAnimationsModule,
    // WebcamModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
