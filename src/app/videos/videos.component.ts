import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

export class VideosComponent implements OnInit {
  video:boolean = false;
  vid:any;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.video= false;
  }
  Video(){
    this.video= true;
    // this.vid;
    this.vid = (this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YbkOrbuvFsc?autoplay=1"));
    console.log(this.vid);
  }
  submit(){
    console.log("Submitted");
  }

}
