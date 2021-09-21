import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalContainerComponent } from '../modal-container/modal-container.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatpicsService } from '../catpics.service';
import { PicModal } from '../picmodal';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() id: string;
  @Input() caption: string;
  @Input() image: string = '../../assets/images/cat001.jpg';
  picId: string;
  picData: PicModal;

  imagePath: string = 'assets/images/';
  _imageFullPath: string;

  constructor(private el: ElementRef,
              private modalService: NgbModal,
              private catpicsService: CatpicsService ) { }

  ngOnInit() {
    //update path
    this._imageFullPath = this.imagePath + this.image;
    this.picId = this.id;
    /*

    //fix div to remove parent div added by angular - https://stackoverflow.com/a/59009696
    let myCardDiv: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = myCardDiv.parentElement;
    // get all children and move them out of the element
    while (myCardDiv.firstChild) {
      parentElement.insertBefore(myCardDiv.firstChild, myCardDiv);
    }
    */
    // remove the empty element(the host)
   // parentElement.removeChild(myCardDiv);
  }

  // Edit the pic
  onClickEdit(picId: string) {
    this.picId = picId;
    console.log('VIEWING PIC: ', this.picId);

    const modalRef = this.modalService.open(ModalContainerComponent);
    modalRef.componentInstance.editing = true;
    modalRef.componentInstance.name = 'Pic_' + picId;
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.caption = this.caption;
    modalRef.componentInstance.image = this._imageFullPath;

    // subscribe to the changed event by adding the event emitter to the modalRef
    // and update the caption on this card
    modalRef.componentInstance.captionChange.subscribe((receivedCaptionChangeEvent) => {
      console.log(receivedCaptionChangeEvent);
      this.caption = receivedCaptionChangeEvent;
    })

    // pass the entire pic instance into the instance
    //  this.catpicsService.getPic(this.picId).subscribe(
    //   (data: PicModal) => {
    //     console.log('pIC DATA:', data);
    //     /*
    //     modalRef.componentInstance.caption= data.caption;
    //     modalRef.componentInstance.image = data.image;
    //     modalRef.componentInstance.id = data.image;
    //     */
    // });


  }

  // triggers when modal captionChange emits
  captionChangeHandler(event) {
    console.log('EVENT (captionChangeHandler):', event);
  }

  //STUB
  onClickView(picId: string) {
    const modalRef = this.modalService.open(ModalContainerComponent);
    modalRef.componentInstance.editing = false;
    modalRef.componentInstance.name = 'Pic_' + picId;
    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.caption = this.caption;
    modalRef.componentInstance.image = this._imageFullPath;


  }

}
