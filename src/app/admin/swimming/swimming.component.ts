import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { SwimmingService } from './swimming.service';
import { IMyDpOptions } from 'mydatepicker';


@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.css']
})
export class SwimmingComponent implements OnInit {

  public modalRef: BsModalRef;
  public swims = [];
  public distance: number;
  public comments: string;
  public selectedDate: any;

  public newSwim: Swim;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private _swimmingService: SwimmingService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.getSwims();
  }

  getSwims() {
    this.swims = this._swimmingService.getSwimmings();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addSwim() {
    console.log('Hallo from add new swim');
    const newEntry = new Swim();
    newEntry.date = this.selectedDate.epoc;
    newEntry.distance = this.distance;
    newEntry.comments = this.comments;
    this.modalRef.hide();
    console.log(newEntry);
  }

}

class Swim {
  date: any;
  distance: number;
  comments: string;
}
