import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenu(): Array<any> {
    const menu = [
      { name: 'Главная', path: './home', children: [] },
      {
        name: 'Wärmehaus', path: './warmehaus', children: [

          { name: 'Маты 160Вт', path: './mat-160W' },
          { name: 'Маты 200Вт', path: './mat-200W' },
          { name: 'Двужильный CAB 11W THIN', path: './cab-11W-thin' },
          { name: 'Двужильный CAB 14W THIN', path: './cab-14W-thin' },
          { name: 'Двужильный CAB 20W UV', path: './cab-20W-uv-protection' },
          { name: 'Терморегуляторы', path: './termostats' },
          { name: 'Инфракрасная плёнка', path: './films' },
        ]
      },
    ];
    return menu;
  }
}
