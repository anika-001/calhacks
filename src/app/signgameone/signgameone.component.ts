import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signgameone',
  templateUrl: './signgameone.component.html',
  styleUrls: ['./signgameone.component.scss']
})
export class SigngameoneComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  questionnumber: any = 0;
  questions: any;

  ngOnInit(): void {
  }

  getquestions(){

  }


}
