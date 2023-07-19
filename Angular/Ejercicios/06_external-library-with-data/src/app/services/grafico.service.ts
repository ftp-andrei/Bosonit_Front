import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficoService {
  constructor(private http: HttpClient) {}

  api_Url: string = 'https://api.covidtracking.com/v1/states';

  getData() {
    return this.http.get(`${this.api_Url}/current.json`);
  }

  getStatesData() {
    return this.getData().pipe(
      map((data) => {
        const labels = Object.values(data);
        const array = labels.map(function (e: any) {
          let values = {
            state: e.state,
            positive: e.positive,
            negative: e.negative,
          };
          return { values };
        });
        return { array };
      })
    );
  }
}
