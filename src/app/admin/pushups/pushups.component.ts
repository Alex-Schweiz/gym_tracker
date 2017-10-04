import { Component, OnInit } from '@angular/core';
import { PushupsService } from './pushups.service';

@Component({
  selector: 'app-pushups',
  templateUrl: './pushups.component.html',
  styleUrls: ['./pushups.component.css']
})
export class PushupsComponent implements OnInit {

  public target = 200;
  public pushups = [];

  constructor(private _pushupsService: PushupsService) { }

  ngOnInit() {
    this.getPushups();
  }

  getPushups() {
    this.pushups = this._pushupsService.getPushups();
    this.pushups.forEach( (pushup) => {
      pushup.percentage = (pushup.repeats / this.target * 100).toFixed(2);
    });
  }

}
