import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.scss']
})
export class CoursepageComponent implements OnInit {
  courseinfo:boolean= false;
  constructor() { }

  ngOnInit(): void {
    // console.log("HEyyyyyyyyyyyyyyyyyy");
    this.courseinfo = false;
  }
  open()
  {
    this.courseinfo = true;
  }
close(){
  console.log("HELOOOOOOO");
  this.courseinfo = false;

}
}
