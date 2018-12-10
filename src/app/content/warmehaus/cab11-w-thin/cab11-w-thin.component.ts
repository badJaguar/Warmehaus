import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_11W_THIN } from 'src/models/cab-11w-thin';

@Component({
  selector: 'app-cab11-w-thin',
  templateUrl: './cab11-w-thin.component.html',
  styleUrls: ['./cab11-w-thin.component.css']
})
export class Cab11WThinComponent implements OnInit {

  displayedColumns: string[] = ['name', 'nominal', 'price'];
    dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_11W_THIN);
  
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
