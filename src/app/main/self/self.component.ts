import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  headline: string;
  newHeadline: string;
  constructor() { }

  ngOnInit() {
  }

  addHeadline(valid) {
    if (valid) {
      this.newHeadline = this.headline;
    }
  }
}
