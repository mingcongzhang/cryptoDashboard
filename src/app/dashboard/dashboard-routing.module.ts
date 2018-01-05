import {RouterModule, Routes} from '@angular/router';
import {Route} from '../core/route.service';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';
import {extract} from '../core/i18n.service';

const routes: Routes = Route.withShell([
  { path: 'dashboard', component: DashboardComponent, data: { title: extract('Dashboard') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DashboardRoutingModule { }
