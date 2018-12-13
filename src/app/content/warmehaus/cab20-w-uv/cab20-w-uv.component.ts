import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION } from 'src/models/cab-20w-uv-protection';

@Component({
  selector: 'app-cab20-w-uv',
  templateUrl: './cab20-w-uv.component.html',
  styleUrls: ['./cab20-w-uv.component.css']
})
export class Cab20WUvComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION);

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
