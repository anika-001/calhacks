import { Component, OnInit } from '@angular/core';
import { spaces } from '../JSONData/spaces';

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.scss']
})
export class MhomeComponent implements OnInit {

  constructor() { }
  spaces: any;
  ngOnInit(): void {
    this.spaces = spaces;
  }

}
