import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  url: string;
}

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  tiles: Tile[] = [
    {url: "../../assets/images/logo.png", cols: 4, rows: 1, color: 'lightblue'},
    {url: "../../assets/images/gridPics/cabel.png", cols: 1, rows: 2, color:'#cacaca'},
    {url: "../../assets/images/gridPics/ir.png", cols: 1, rows: 1, color: 'lightpink'},
    {url: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},

    {url: 'Five', cols: 2, rows: 1, color: 'lightpink'},
    {url: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
    {url: 'Seven', cols: 2, rows: 2, color: 'lightpink'},
    {url: 'Eight', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
