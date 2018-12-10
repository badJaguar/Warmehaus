import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenu(): Array<any> {
    const menu = [
      { name: 'Главная', path: './home', children: [] },
      { name: 'Wärmehaus', path:'./warmehaus', children: [

        {name: 'Маты 160Вт', path: './mat-160W'},
        {name: 'Маты 200Вт', path: './mat-200W'},
        {name: 'CAB 11W THIN', path: './cab-11W-thin'},

      ]},
    ];
    return menu;
  }

}