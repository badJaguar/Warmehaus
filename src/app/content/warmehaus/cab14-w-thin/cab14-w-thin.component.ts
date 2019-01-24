import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_14W_THIN } from 'src/data/cab-14w-thin-data';

@Component({
  selector: 'app-cab14-w-thin',
  templateUrl: './cab14-w-thin.component.html',
  styleUrls: ['./cab14-w-thin.component.css']
})
export class Cab14WThinComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_14W_THIN);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
