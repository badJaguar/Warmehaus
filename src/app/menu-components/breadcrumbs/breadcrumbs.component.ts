import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private _router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        // tslint:disable-next-line:no-shadowed-variable
        routerList.forEach(( router, index) => {

          target = target.find(page => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
          });

          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbList);
      }
    });
  }


}
