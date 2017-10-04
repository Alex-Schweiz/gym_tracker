import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PushupsService {

  public pushups = [{
    date: '24/08/2016',
    repeats: 112,
  }, {
    date: '25/08/2016',
    repeats: 118,
  }, {
    date: '26/08/2016',
    repeats: 110,
  }, {
    date: '27/08/2016',
    repeats: 108,
  }
  ];

  constructor() { }

  getPushups() {
    return this.pushups;
  }
}
