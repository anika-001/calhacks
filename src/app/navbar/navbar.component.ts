import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private db: AngularFirestore, private as: AuthService, private router: Router) { }

  userID: any;
  profile: any;

  ngOnInit(): void {
    this.as.getUserState()
    .subscribe(user => {
      if(user == null){this.router.navigate(['/signin'])}
      this.userID = user.uid;
      this.as.getprofile(this.userID).subscribe(res => {
        this.profile = res;
        console.log(this.profile.payload.data())
      })
    })
  }

  logout(){
    this.as.logout();
  }
}
