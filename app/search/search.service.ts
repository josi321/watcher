import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http'; //URLSearchParams is a library
import { Observable } from 'rxjs/Observable';
import { Show } from './show'; // import our show interface

@Injectable()
export class SearchService {
  constructor(private _http: Http) { }


}
