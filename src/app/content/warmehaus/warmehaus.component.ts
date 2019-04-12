import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-warmehaus',
  templateUrl: './warmehaus.component.html',
  styleUrls: ['./warmehaus.component.css']
})
export class WarmehausComponent implements OnInit {
  list: Array<any> = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.list = this.menuService
      .getMenu()[1].children;
  }

}
