import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { WarmehausComponent } from './pages/warmehaus/warmehaus.component';
import { WarmingMat160WComponent } from './pages/warming-mat160-w/warming-mat160-w.component';

const routes: Routes = [
  { path: '', component: DefaultPageComponent, pathMatch: 'full'},
  { path: 'home', component: DefaultPageComponent, pathMatch: 'full', data: {breadcrumb: 'Главная'}  },
  { path: 'warmehaus', component: WarmehausComponent, pathMatch: 'full', data: {breadcrumb: 'Warmehaus'}  },
  { path: 'warming-mat-160W', component: WarmingMat160WComponent, pathMatch: 'full', data: {breadcrumb: 'Мат 160Вт'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
