import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children: [] },
      { name: 'warmehaus', path:'./warmehaus', children: [

        {name: 'mat160w', path: './mat-160W'},
        {name: 'mat200w', path: './mat-200W'},

      ]},
    ];
    return menu;
  }

}