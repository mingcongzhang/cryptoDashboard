import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';

const routes = {
  marketData: 'https://bittrex.com/api/v1.1/public/getmarkets'
};

@Injectable()
export class PublicDataService {
  constructor(private http: HttpClient) {}
  getMarketData(): Observable<any> {
    return this.http.get<any>(routes.marketData, {})
      .pipe(
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
