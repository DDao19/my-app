import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Need to return ".get<any[]> in http request or it will return
  // error "Type object is not assignable to type any[]"
  getBeer() {
    return this.http.get<any>('https://api.openbrewerydb.org/breweries')
  }
}
