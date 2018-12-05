import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Tile {
  route: any;
  alt: string;
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
    {route: '#', picUrl: "../../assets/images/gridPics/Слайд.png", cols: 4, rows: 1, alt: 'Теплые полы в Минске'},
    {route: '/warming-mat-160W', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_160Вт.png", cols: 2, rows: 1, alt:'Нагревательный мат 160 Вт'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_200Вт.png", cols: 2, rows: 1, alt: 'Нагревательный мат 200 Вт'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'},

    {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в стяжку 20Вт'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Инфракрасная_Плёнка.png", cols: 2, rows: 1, alt: 'Инфракрасная пленка'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Системы_антиобледенения.png", cols: 2, rows: 1, alt: 'Системы антиобледенения'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Терморегуляторы.png", cols: 2, rows: 1, alt: 'Терморегуляторы'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
