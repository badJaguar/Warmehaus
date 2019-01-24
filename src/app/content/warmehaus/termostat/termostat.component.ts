import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ELEMENT_DATA_TERMOSTATS, Termostat as Termostat } from 'src/models/termostat';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { MY_IMAGEVIEWER_CONFIG } from 'src/app/constants/image-view-styles';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-termostat',
  templateUrl: './termostat.component.html',
  styleUrls: ['./termostat.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('0ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class TermostatComponent implements OnInit {

  
  columnsToDisplay = ['name', 'nominal', 'price'];
  headerNames : string[] = ['Тип','м2/Вт','Цена'];
  expandedElement: Termostat | null;
  

  dataSource = new MatTableDataSource(ELEMENT_DATA_TERMOSTATS);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
