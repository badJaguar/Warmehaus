import { Component, OnInit } from '@angular/core';
import { ITile } from 'src/models/tiles';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  breakpoint: number;
  tiles: ITile[] = [
    {
      route: '#',
      picUrl: 'assets/images/gridPics/grid-1-web.jpg',
      cols: 4,
      rows: 2,
      alt: 'Теплые полы в Минске'
    },
    {
      route: '/warmehaus/mat-160W',
      picUrl: 'assets/images/gridPics/Нагревательный_Мат_160Вт.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 160 Вт'
    },
    {
      route: '/warmehaus/mat-200W',
      picUrl: 'assets/images/gridPics/Нагревательный_Мат_200Вт.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 200 Вт'
    },
    {
      route: '/warmehaus/cab-11W-thin',
      picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'
    },

    {
      route: '/warmehaus/cab-14W-thin',
      picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'
    },
    {
      route: '/warmehaus/cab-20W-uv-protection',
      picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в стяжку 20Вт'
    },
    {
      route: '/warmehaus/films',
      picUrl: 'assets/images/gridPics/Инфракрасная_Плёнка.png',
      cols: 2,
      rows: 1,
      alt: 'Инфракрасная пленка'
    },
    {
      route: 'url',
      picUrl: 'assets/images/gridPics/Системы_антиобледенения.png',
      cols: 2,
      rows: 1,
      alt: 'Системы антиобледенения'
    },
    {
      route: '/warmehaus/termostats',
      picUrl: 'assets/images/gridPics/Терморегуляторы.png',
      cols: 2,
      rows: 1,
      alt: 'Терморегуляторы'
    },
  ];
  ngOnInit() {
    if (window.innerWidth >= 416) {
      this.tiles[0].cols = 4;
      this.tiles[0].rows = 2;
    } else {
      this.tiles[0].cols = 2;
      this.tiles[0].rows = 1;
      }
    this.breakpoint = (window.innerWidth <= 416) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 416) ? 2 : 4;
    if (event.target.innerWidth <= 416) {
      this.tiles[0].cols = 2;
      this.tiles[0].rows = 1;
    } else {
      this.tiles[0].cols = 4;
      this.tiles[0].rows = 2;
      }
    }
  }
