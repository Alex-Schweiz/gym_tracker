import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IMyDpOptions } from 'mydatepicker';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-situps',
  templateUrl: './situps.component.html',
  styleUrls: ['./situps.component.css']
})
export class SitupsComponent implements OnInit {
  public modalRef: BsModalRef;
  public repeats: number;
  public comments: string;
  public selectedDate: any;

  situps: FirebaseListObservable<any[]>;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private modalService: BsModalService,
              db: AngularFireDatabase) {
    this.situps = db.list('/situps');
  }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addSitup() {
    const newSitup = new Situp();
    newSitup.date = this.selectedDate.epoc;
    newSitup.repeats = this.repeats;
    newSitup.comments = this.comments;
    this.modalRef.hide();
    this.situps.push(newSitup);
  }

  softDeleteSitup(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteSitup(key: string) {
    this.situps.remove(key);
  }

}

class Situp {
  date: any;
  repeats: number;
  comments: string;
}

