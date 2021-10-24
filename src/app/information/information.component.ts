import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor() { }

  picked: any = 1;

  ngOnInit(): void {
  }

  pick(num: any){
    this.picked = num;
  }
}
