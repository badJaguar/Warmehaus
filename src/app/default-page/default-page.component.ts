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
    {url: "../../assets/images/gridPics/Logo_Banner.png", cols: 4, rows: 1, color: 'lightblue'},
    {url: "../../assets/images/gridPics/Нагревательный_Кабель.png", cols: 2, rows: 1, color:'#cacaca'},
    {url: "../../assets/images/gridPics/Инфракрасная_Плёнка.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {url: "../../assets/images/gridPics/Нагревательный_Мат.png", cols: 2, rows: 1, color: '#DDBDF1'},

    {url: 'Five', cols: 2, rows: 1, color: 'lightpink'},
    {url: 'Six', cols: 2, rows: 1, color: '#DDBDF1'},
    {url: 'Seven', cols: 1, rows: 1, color: 'lightpink'},
    {url: 'Eight', cols: 1, rows: 1, color: '#DDBDF1'},
    {url: 'Eight', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
