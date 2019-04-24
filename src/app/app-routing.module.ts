import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './content/main-page/main-page.component';
import { AnitIcingComponent } from './content/warmehaus/anit-icing/anit-icing.component';
import { Cab11WThinComponent } from './content/warmehaus/cab11-w-thin/cab11-w-thin.component';
import { Cab14WThinComponent } from './content/warmehaus/cab14-w-thin/cab14-w-thin.component';
import { Cab20WUvComponent } from './content/warmehaus/cab20-w-uv/cab20-w-uv.component';
import { FilmsComponent } from './content/warmehaus/films/films.component';
import { TermostatComponent } from './content/warmehaus/termostat/termostat.component';
import { WarmehausComponent } from './content/warmehaus/warmehaus.component';
import { WarmingMat160WComponent } from './content/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './content/warmehaus/warming-mat200-w/warming-mat200-w.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'warmehaus',
    component: WarmehausComponent,
    children: [
      { path: 'mat-160W', component: WarmingMat160WComponent },
      { path: 'mat-200W', component: WarmingMat200WComponent },
      { path: 'cab-11W-thin', component: Cab11WThinComponent },
      { path: 'cab-14W-thin', component: Cab14WThinComponent },
      { path: 'cab-20W-uv-protection', component: Cab20WUvComponent },
      { path: 'termostats', component: TermostatComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'anti-icing', component: AnitIcingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
