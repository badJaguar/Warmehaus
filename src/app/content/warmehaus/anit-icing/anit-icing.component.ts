import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_PIPE_HEATING_CABLE } from 'src/data/anti-icing/pipe-heating-cable-data';
import { ITermostat } from 'src/models/termostat';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { MY_IMAGEVIEWER_CONFIG } from 'src/app/constants/image-view-styles';
import { ELEMENT_ANTI_ICING_SYSTEMS_DATA } from 'src/data/anti-icing/anti-icing-systems-data';
import { IAntiIcingSystems } from 'src/models/antiIsingSystems';

@Component({
  selector: 'app-anit-icing',
  templateUrl: './anit-icing.component.html',
  styleUrls: ['./anit-icing.component.css'],

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
export class AnitIcingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  pipeHeatingDataSource = new MatTableDataSource(ELEMENT_DATA_PIPE_HEATING_CABLE);

//
  expandedElement: IAntiIcingSystems | null;
  dataSource = new MatTableDataSource(ELEMENT_ANTI_ICING_SYSTEMS_DATA);
  columnsToDisplay = ['name', 'nominal', 'price'];
  headerNames: string[] = ['Тип', 'м2/Вт', 'Цена'];
//

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.pipeHeatingDataSource.sort = this.sort;
    this.pipeHeatingDataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.pipeHeatingDataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
