import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiOptions {
  constructor() { }

  set(options) {
    const { path, method, body } = options;
    const url = `${environment.hostname}/${path}`;

    return {
      url,
      method,
      data: body,
      query: options.query,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer BQBKQrCphR54I6L-3-QCOv2FjQIWKo-BYGXEwdDeo4yhTVk01CLvaYeHnVwigoayoendd8sjshlgQMfPBPWxLF2ZxViDTqI22sOW5fGZNvPS8vNiXy_7KNyIMH0X-a8jnxcLFOvd6FZOkodyf88Xoui_iTgcloY',
      }
    };
  }

}
