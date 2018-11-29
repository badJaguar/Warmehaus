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
    {url: "../../assets/images/gridPics/Слайд.png", cols: 4, rows: 1, color: 'lightblue'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 2, rows: 1, color:'#cacaca'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 2, rows: 1, color: '#DDBDF1'},

    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 2, rows: 1, color: 'lightpink'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 1, rows: 1, color: 'lightpink'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат_160w.png", cols: 1, rows: 1, color: '#DDBDF1'},
    {url: 'Eight', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
