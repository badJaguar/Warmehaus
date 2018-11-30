import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  picUrl: string;
}

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  tiles: Tile[] = [
    {picUrl: "../../assets/images/gridPics/Слайд.png", cols: 4, rows: 1, color: 'lightblue'},
    {picUrl: "../../assets/images/gridPics/Нагревательный_Мат_160Вт.png", cols: 2, rows: 1, color:'#cacaca'},
    {picUrl: "../../assets/images/gridPics/Нагревательный_Мат_200Вт.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png", cols: 2, rows: 1, color: '#DDBDF1'},

    {picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png", cols: 2, rows: 1, color: 'lightpink'},
    {picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {picUrl: "../../assets/images/gridPics/Инфракрасная_Плёнка.png", cols: 2, rows: 1, color: 'lightpink'},
    {picUrl: "../../assets/images/gridPics/Системы_антиобледенения.png", cols: 2, rows: 1, color: '#DDBDF1'},
    {picUrl: "../../assets/images/gridPics/Терморегуляторы.png", cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
