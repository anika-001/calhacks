import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signgameone',
  templateUrl: './signgameone.component.html',
  styleUrls: ['./signgameone.component.scss']
})
export class SigngameoneComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }

  questionnumber: any = 1;
  questions: any;
  score: any = 0;
  picked: any;
  gameend: boolean = false;

  ngOnInit(): void {
    this.getquestions();
  }

  getquestions(){
    this.db.collection("signsgameone").snapshotChanges().subscribe(res => {
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
      this.gameend = true;
      return;
    }
    this.questionnumber += 1;
  }

  gotohome(){
    this.router.navigate(['/shome']);
  }
}
