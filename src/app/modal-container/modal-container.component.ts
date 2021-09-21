import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PicModal } from '../picmodal';
import { CatpicsService } from '../catpics.service';
// import {ReactiveFormsModule }  from '@angular/forms';


@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @Input() public id: string;
  @Input() public caption: string;
  @Input() public image: string;
  @Input() public picObj: any;
  @Output() public captionChange: EventEmitter<any> = new EventEmitter<any>();
  public editing: boolean;
  open: boolean;
  model: PicModal;

  constructor(public activeModal: NgbActiveModal, private catpicsService: CatpicsService) {  }

  ngOnInit(): void {
    const newPicObj = new PicModal(this.id, this.image, this.caption); //create a new copy?
    console.log('New Data! ', newPicObj);

    // populates this.model tied to the ngModel with picObj
    // otherwise, the model will create an empty one
    this.model = newPicObj;
  }

  updateCaption(id: string) {
 //   if (todoObj.id && todoObj.id !== null) {
    this.catpicsService.getPic(id).subscribe(data => {
      console.log('updateCaption  for:', data.id)
      // modify the data with the one from the ngModel
      data.caption = this.model.caption;
      this.catpicsService.updatePic(data).subscribe(data1 => {
        console.log('Updated caption to', data1.caption);
        this.captionChange.emit(data1.caption);

      });
    });

    this.activeModal.close('Updated caption');
  }


}
/* Container for the modal, lls ngBModal apis */