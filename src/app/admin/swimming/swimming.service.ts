import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SwimmingService {

  public swimmings = [
    {
    date: '24/08/2016',
    distance: 750,
    comment: 'That was a great'
  }, {
    date: '25/08/2016',
    distance: 600,
    comment: 'That was a great'
  }, {
    date: '26/08/2016',
    distance: 800,
    comment: 'That was a great'
  }, {
    date: '27/08/2016',
    distance: 900,
    comment: 'That was a great'
  }
  ];

  constructor() { }

  getSwimmings() {
    return this.swimmings;
  }
}
