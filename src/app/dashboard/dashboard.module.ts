import {NgModule} from '@angular/core';
import {Ng2TableModule} from 'ng2-table';
import {DashboardRoutingModule} from './dashboard.routes';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ng2TableModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule { }
