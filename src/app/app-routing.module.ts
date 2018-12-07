import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './content/main-page/main-page.component';
import { WarmehausComponent } from './content/warmehaus/warmehaus.component';
import { WarmingMat160WComponent } from './content/warmehaus/warming-mat160-w/warming-mat160-w.component';

const routes: Routes = [
  { path: 'home', component: DefaultPageComponent, pathMatch: 'full'},
  { path: 'warmehaus', component: WarmehausComponent, pathMatch: 'full'},
  { path: 'warming-mat-160W', component: WarmingMat160WComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
