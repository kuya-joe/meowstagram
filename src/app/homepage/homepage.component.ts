import { Component, OnInit } from '@angular/core';
import { CatpicsService } from '../catpics.service';
import { PicModal } from '../picmodal';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  pics: Array<PicModal>;

  constructor(private picProvider: CatpicsService) { }

  ngOnInit(): void {
    this.picProvider.getPics().subscribe(
      (data: Array<PicModal>) => {
        console.log(data);
        this.pics = data;
      }
    );
  }


}
