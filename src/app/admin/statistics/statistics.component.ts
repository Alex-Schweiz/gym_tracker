import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [DatePipe],
})
export class StatisticsComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series 2'},
  ];

  listExercises = [
    {
      name: 'Situps',
      value: 'situps'
    },
    {
      name: 'Squats',
      value: 'squats'
    },
    {
      name: 'Swims',
      value: 'swims'
    },
  ];

  selectedExerciseList: any;

  testData = {
    squats: [],
    situps: [],
    swims: [],
  };

  squats: FirebaseListObservable<any[]>;
  situps: FirebaseListObservable<any[]>;
  swims: FirebaseListObservable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public datePipe: DatePipe) {
    this.squats = db.list('/squats');
    this.situps = db.list('/situps');
    this.swims = db.list('/swims');
  }

  ngOnInit() {
    this.getSquats();
    this.getSitups();
    this.getSwims();
  }

  getSquats(): void {
    this.squats.subscribe(result => {
      this.testData.squats.push(result);
    });
  }

  getSitups(): void {
    this.situps.subscribe(result => {
      this.testData.situps.push(result);
    });
  }

  getSwims(): void {
    this.swims.subscribe(result => {
      this.testData.swims.push(result);
    });
    console.log(this.testData);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  showSquatsChart(chartType) {
    console.log('Selected chart Type');
    console.log(chartType);
    this.barChartData[0].label = chartType;
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    console.log(this.testData[chartType][0]);
    for (const item of this.testData[chartType][0]) {
      this.barChartLabels.push(this.datePipe.transform(item.date * 1000));
      if (chartType === 'swims') {
        this.barChartData[0].data.push(item.distance);
      } else {
        this.barChartData[0].data.push(item.repeats);
      }
    }
  }

  calculateList($event) {
    this.showSquatsChart($event);
     /*const transformpipe = this.datePipe.transform(1504306450 * 1000);
     console.log(transformpipe);*/
  }


}
