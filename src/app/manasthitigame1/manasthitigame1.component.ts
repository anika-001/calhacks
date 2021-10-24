import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from '@firebase/app-compat';
import * as $ from 'jquery';

@Component({
  selector: 'app-manasthitigame1',
  templateUrl: './manasthitigame1.component.html',
  styleUrls: ['./manasthitigame1.component.scss']
})
export class Manasthitigame1Component implements OnInit {

  topics: Array<any> = [];
  topicnames: Array<string> = [];
  currentquestion: any;
  picked: boolean = false;
  levels = { 0: "Easy", 1: "Medium", 2: "Difficult" }
  donex: Array<any> = [];
  questionnow: any;
  optionsnow: any = [];
  questions: Array<any> = [{}, {}, {}];
  correct: boolean = false;
  gameend: boolean = false;
  curx: any;
  cury: any;
  plus = 0;
  minus = 0;
  generated: boolean = false;
  score: any = 0;
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.gettopics();
  }

  gettopics() {
    this.db.collection("Topics").snapshotChanges().subscribe((res: any) => {
      this.topics = res;
      for (let i of [0, 1, 2]) {
        this.topicnames.push(res[i].payload.doc.data().name)
      }
      this.getquestions();
    })
  }

  getquestions() {
    for (let x of [0, 1, 2]) {
      this.db.collection("Topics").doc(this.topics[x].payload.doc.id).collection("Easy").snapshotChanges().subscribe(res => {
        // var rand = Math.trunc(Math.random() * (res.length));
        this.questions[x]["Easy"] = (res[0].payload.doc.id);
        // res.slice(rand, 1);
        this.db.collection("Topics").doc(this.topics[x].payload.doc.id).collection("Medium").snapshotChanges().subscribe(res => {
          // var rand = Math.trunc(Math.random() * (res.length));
          this.questions[x]["Medium"] = (res[0].payload.doc.id);
          // res.slice(rand, 1);
          this.db.collection("Topics").doc(this.topics[x].payload.doc.id).collection("Difficult").snapshotChanges().subscribe(res => {
            // var rand = Math.trunc(Math.random() * (res.length));
            this.questions[x]["Difficult"] = (res[0].payload.doc.id);
            // res.slice(rand, 1);
            console.log(this.questions);
            this.generated = true;
          })
        })
      })
    }
  }

  question(x: any, y) {
    this.curx = x;
    this.cury = y;

    if (this.inarr((x * 3) + y)) return;

    this.donex.push(((x * 3) + y))
    this.picked = true;
    this.db.collection("Topics").doc(this.topics[x].payload.doc.id).collection(this.levels[y]).doc(this.questions[x][this.levels[y]]).snapshotChanges().subscribe(res => {
      this.questionnow = res;
      if (this.optionsnow.length == 4) return
      this.optionsnow.push(this.questionnow.payload.data().o1, this.questionnow.payload.data().o2, this.questionnow.payload.data().o3, this.questionnow.payload.data().o4)

    })
  }

  inarr(elem: any) {
    for (let x of this.donex) {
      if (elem == x) return true
    }
    return false;
  }

  // answer() {
  //   var increment = firebase.firestore.FieldValue.increment(1);
  // }

  // endsession() {
  //   var name = localStorage.getItem("name");
  //   var code = localStorage.getItem("code");
  // }

  // getcode() {
  //   return localStorage.getItem("code");
  // }

  check(x: any) {
    if(this.donex.length == 9){
      this.gameend = true;
    }
    this.picked = false;
    var increment;
    if (x.toString() == (this.questionnow.payload.data().Answer).split("o")[1]) {
      this.plus = (this.cury + 1) * 200 * Number(this.questionnow.payload.data().Multiplier)
      // $(".correct").css("display", "block");
      $(".ppoints").css("display", "block");
      $("#corrimg").css("display", "block");
      if (this.questionnow.payload.data().Multiplier > 1) { $("#mulimg").css("display", "block"); }
      // increment = firebase.firestore.FieldValue.increment((this.cury + 1) * 200 * Number(this.questionnow.payload.data().Multiplier));
      this.score += (this.cury + 1) * 200 * Number(this.questionnow.payload.data().Multiplier);
      // setInterval(function(){ $(".correct").css("display", "none"); clearInterval()}, 3000);

      setInterval(function () { $(".ppoints").css("display", "none"); $("#corrimg").css("display", "none"); $("#mulimg").css("display", "none"); clearInterval(); }, 3000);

    }
    else {
      // increment = firebase.firestore.FieldValue.increment(-1 * (this.cury + 1) * 100);
      this.score += -1 * (this.cury + 1) * 100;
      this.minus = -1 * (this.cury + 1) * 100;
      $(".npoints").css("display", "block");
      setInterval(function () { $(".npoints").css("display", "none"); clearInterval() }, 3000);

    }
    // this.db.collection("Rooms").doc(localStorage.getItem("code")).collection("Players").doc(localStorage.getItem("name")).update({ "Score": increment })
    this.questionnow = {};
    this.optionsnow = [];
    // this.answer();

  }

  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event) {
  //   this.endsession();
  // }

  // endgame() {
  //   this.endsession();
  // }

}
