import { Component, OnInit } from '@angular/core';
import { ITile } from 'src/models/tiles';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tiles: ITile[] = [
    {route: '#', picUrl: "../../assets/images/gridPics/Слайд.png", cols: 4, rows: 1, alt: 'Теплые полы в Минске'},
    {route: '/warmehaus/mat-160W', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_160Вт.png", cols: 2, rows: 1, alt:'Нагревательный мат 160 Вт'},
    {route: '/warmehaus/mat-200W', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_200Вт.png", cols: 2, rows: 1, alt: 'Нагревательный мат 200 Вт'},
    {route: '/warmehaus/cab-11W-thin', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'},

    {route: '/warmehaus/cab-14W-thin', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'},
    {route: '/warmehaus/cab-20W-uv-protection', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в стяжку 20Вт'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Инфракрасная_Плёнка.png", cols: 2, rows: 1, alt: 'Инфракрасная пленка'},
    {route: 'url', picUrl: "../../assets/images/gridPics/Системы_антиобледенения.png", cols: 2, rows: 1, alt: 'Системы антиобледенения'},
    {route: '/warmehaus/termostats', picUrl: "../../assets/images/gridPics/Терморегуляторы.png", cols: 2, rows: 1, alt: 'Терморегуляторы'},
  ];
  constructor() { }

  ngOnInit() {
  }
  
}
