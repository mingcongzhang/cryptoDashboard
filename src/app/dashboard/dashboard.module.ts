import {NgModule} from '@angular/core';
import {Ng2TableModule} from 'ng2-table';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {PublicDataService} from './publicData.service';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ng2TableModule,
    CoreModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    PublicDataService
  ]
})

export class DashboardModule { }
