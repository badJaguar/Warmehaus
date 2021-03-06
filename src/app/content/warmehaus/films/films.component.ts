import { Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENT_DATA_FILMS } from 'src/data/film-data';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_FILMS);

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
