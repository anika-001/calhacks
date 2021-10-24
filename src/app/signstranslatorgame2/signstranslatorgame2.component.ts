import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from '@firebase/app-compat';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signstranslatorgame2',
  templateUrl: './signstranslatorgame2.component.html',
  styleUrls: ['./signstranslatorgame2.component.scss']
})
export class Signstranslatorgame2Component implements OnInit {

  
  constructor(private db: AngularFirestore, private router: Router, private as: AuthService) { }

  questionnumber: any = 1;
  questions: any;
  score: any = 0;
  picked: any;
  gameend: boolean = false;
  userID: any;

  ngOnInit(): void {
    this.as.getUserState()
    .subscribe(user => {
      if(user == null){this.router.navigate(['/signin'])}
      this.userID = user.uid;
    })
    this.getquestions();
  }

  getquestions(){
    this.db.collection("signsgame2").snapshotChanges().subscribe(res => {
      this.questions = res;
    })
  }

  next(ans: string){
    this.picked = ans;
  }

  gotonext(){
    if(this.picked == this.questions[this.questionnumber - 1].payload.doc.data().Answer){
      this.score += 10;
    }
    if(this.questionnumber == 5){
      var increment = firebase.firestore.FieldValue.increment(this.score);
      this.db.collection("Users").doc(this.userID).update({score: increment})
      this.gameend = true;
      return;
    }
    this.questionnumber += 1;
    this.picked = "";
  }

  gotohome(){
    this.router.navigate(['/shome']);
  }
}
