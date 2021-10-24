import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HomeComponent } from './home/home.component'
import { InformationComponent } from './information/information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebinarComponent } from './webinar/webinar.component';
import { PortalComponent } from './portal/portal.component';
import { ProfileComponent } from './profile/profile.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    ASLtranslatorComponent,
    VideosComponent,
    SigninComponent,
    HomeComponent,
    InformationComponent,
    WebinarComponent,
    PortalComponent,
    ProfileComponent
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
