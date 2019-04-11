import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_PIPE_HEATING_CABLE } from 'src/data/anti-icing/pipe-heating-cable-data';

@Component({
  selector: 'app-anit-icing',
  templateUrl: './anit-icing.component.html',
  styleUrls: ['./anit-icing.component.css']
})
export class AnitIcingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_PIPE_HEATING_CABLE);

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
