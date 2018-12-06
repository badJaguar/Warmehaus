import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { WarmehausComponent } from './pages/warmehaus/warmehaus.component';
import { WarmingMat160WComponent } from './pages/warming-mat160-w/warming-mat160-w.component';

const routes: Routes = [
  { path: 'home', component: DefaultPageComponent, pathMatch: 'full' },
  {path: 'warmehaus', component: WarmehausComponent, pathMatch: 'full' },
  {path: 'warming-mat-160W', component: WarmingMat160WComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
