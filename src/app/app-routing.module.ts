import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './content/main-page/main-page.component';
import { WarmehausComponent } from './content/warmehaus/warmehaus.component';
import { WarmingMat160WComponent } from './content/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './content/warmehaus/warming-mat200-w/warming-mat200-w.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent},
  { path: 'warmehaus',
   component: WarmehausComponent,
    children:[
  {path: 'mat-160W', component: WarmingMat160WComponent},
  {path: 'mat-200W', component: WarmingMat200WComponent},
    ]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
