import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ExercisesListComponent implements OnInit {

  public exercisesList = {
    biceps: [{
      id: '1',
      title: 'Сгибание рук со штангой стоя',
    }, {
      id: '2',
      title: 'Подтягивания обратным хватом к груди',
    }, {
      id: '3',
      title: 'Сгибания рук с гантелями сидя / стоя',
    }, {
      id: '4',
      title: 'Сгибание рук с гантелями "молот"',
    }, {
      id: '5',
      title: 'Сгибание рук со штангой хватом сверху',
    }, {
      id: '6',
      title: 'Сгибание рук в тренажёре',
    }, {
      id: '7',
      title: 'Сгибание руки сидя через колено',
    }, {
      id: '8',
      title: 'Сгибание рук на скамье скотта',
    }, {
      id: '9',
      title: 'Сгибание рук с гантелями сидя под углом',
    }, {
      id: '10',
      title: 'Сгибание рук с нижнего блока в кроссовере',
    }, {
      id: '11',
      title: 'Сгибание рук с EZ грифом',
    }, {
      id: '12',
      title: 'Сгибание рук с верхнего блока в кроссовере',
    }],
  };

  constructor() { }

  ngOnInit() {
  }

}
