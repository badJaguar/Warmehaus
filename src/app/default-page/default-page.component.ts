import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color:('https://www.gstatic.com/webp/gallery3/1.png')},
    {text: 'Two', cols: 1, rows: 2, color:'https://www.gstatic.com/webp/gallery3/1.png'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},

    {text: 'Five', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Seven', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Eight', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
