import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { SwimmingService } from './swimming.service';
import { IMyDpOptions } from 'mydatepicker';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.css']
})
export class SwimmingComponent implements OnInit {

  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'month';
  public sortOrder = 'asc';
  public showTable = true;

  public modalRef: BsModalRef;
  public distance: number;
  public comments: string;
  public selectedDate: any;

  swims: FirebaseListObservable<any[]>;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private _swimmingService: SwimmingService,
              private modalService: BsModalService,
              db: AngularFireDatabase) {
    this.swims = db.list('/swims');
  }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addSwim() {
    const newSwim = new Swim();
    newSwim.date = this.selectedDate.epoc;
    newSwim.distance = this.distance;
    newSwim.comments = this.comments;
    this.modalRef.hide();
    this.swims.push(newSwim);
  }

  deleteSwim(key: string) {
    this.swims.remove(key);
  }
}

class Swim {
  date: any;
  distance: number;
  comments: string;
}
