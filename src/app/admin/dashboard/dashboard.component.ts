import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  workoutsCount: number;
  situpsCount: number;
  squatsCount: number;
  swimsDistance: number;

  squats: FirebaseListObservable<any[]>;
  situps: FirebaseListObservable<any[]>;
  swims: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.squats = db.list('/squats');
    this.situps = db.list('/situps');
    this.swims = db.list('/swims');
  }

  ngOnInit() {
    this.getSquatsCount();
    this.getSitupsCount();
    this.getSwimsCount();
  }

  getSquatsCount(): void {
    this.squats.subscribe(result => {
      this.squatsCount = result.length;
    });
  }

  getSitupsCount(): void {
    this.situps.subscribe(result => {
      this.situpsCount = result.length;
    });
  }

  getSwimsCount(): void {
    this.swims.subscribe(result => {
      this.swimsDistance = 0;
      for (const item of result) {
        this.swimsDistance += item.distance;
      }
    });
  }

}
