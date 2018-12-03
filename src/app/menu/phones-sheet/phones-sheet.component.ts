import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-phones-sheet',
  templateUrl: './phones-sheet.component.html',
  styleUrls: ['./phones-sheet.component.css']
})
export class PhonesSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<PhonesSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
