import { Component, OnInit } from '@angular/core';
import {PublicDataService} from './publicData.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading: boolean;
  marketData: any;

  constructor(private publicData: PublicDataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.publicData.getMarketData()
      .pipe(finalize(() => {this.isLoading = false; }))
      .subscribe((data: object) => { this.marketData = data; });
  }

}
