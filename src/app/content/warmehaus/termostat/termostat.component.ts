import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ELEMENT_DATA_TERMOSTATS, Termosrat } from 'src/models/termostat';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-termostat',
  templateUrl: './termostat.component.html',
  styleUrls: ['./termostat.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TermostatComponent implements OnInit {

  columnsToDisplay = ['name', 'nominal', 'price'];
  headerNames : string[] = ['Тип','м2/Вт','Цена'];
  expandedElement: Termosrat | null;

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