import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IMyDpOptions } from 'mydatepicker';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-squats',
  templateUrl: './squats.component.html',
  styleUrls: ['./squats.component.css']
})
export class SquatsComponent implements OnInit {

  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'date';
  public sortOrder = 'desc';

  public modalRef: BsModalRef;
  public repeats: number;
  public comments: string;
  public selectedDate: any;

  squats: FirebaseListObservable<any[]>;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private modalService: BsModalService,
              db: AngularFireDatabase) {
    this.squats = db.list('/squats');
  }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addSquat(): void {
    const newSquat = new Squat();
    newSquat.date = this.selectedDate.epoc;
    newSquat.repeats = this.repeats;
    newSquat.comments = this.comments;
    this.modalRef.hide();
    this.squats.push(newSquat);
  }

  softDeleteSquat(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteSquat(key: string) {
    this.squats.remove(key);
  }

}

class Squat {
  date: any;
  repeats: number;
  comments: string;
}
