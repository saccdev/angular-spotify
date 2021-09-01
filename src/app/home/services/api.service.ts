import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ApiModule } from 'src/app/api/api.module'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private apiModule: ApiModule, private http: HttpClient) { }

  public getSingerByName(singerName: string) {
    const path = 'search';
    const method = 'get';
    const query = { q: singerName, type: 'artist'};

    const options = this.apiModule.run({ path, method, query });
    console.log(options);
    return this.http[options.method]<any>(options.url, { headers: options.headers, params: options.query });
  }
}