import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asltranslator',
  templateUrl: './asltranslator.component.html',
  styleUrls: ['./asltranslator.component.scss']
})
export class ASLtranslatorComponent implements OnInit {

  translator:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.translator = false;
  }

  translate(){
    this.translator = true;
  }

}
