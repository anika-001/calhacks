import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.scss']
})
export class WebinarComponent implements OnInit {

  translator: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.translator = false;
  }

  translate() {
    this.translator = true;
  }

}
