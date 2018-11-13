import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { WarmehausComponent } from './pages/warmehaus/warmehaus.component';

const routes: Routes = [
  { path: '', component: DefaultPageComponent, pathMatch: 'full' },
  {path: 'warmehaus', component: WarmehausComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
