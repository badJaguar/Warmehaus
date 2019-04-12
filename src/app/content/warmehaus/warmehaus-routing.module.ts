import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarmehausComponent } from './warmehaus.component';

const routes: Routes = [
    {path: '/warmehaus', component: WarmehausComponent},
    // {path: '/warmehaus/mat-200W'},
    // {path: '/warmehaus/cab-11W-thin'},
    // {path: '/warmehaus/cab-14W-thin'},
    // {path: '/warmehaus/cab-20W-uv-protection'},
    // {path: '/warmehaus/termostats'},
    // {path: '/warmehaus/anti-icing'},
    // {path: '/warmehaus/films'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarmehausRoutingModule { }
