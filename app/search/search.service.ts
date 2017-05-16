import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Show } from './show';

@Injectable()
export class SearchService {
  // a private property which is the url of the carousel items aka our carousel item json file
  private tvMazeURL: string = 'https://api.tvmaze.com/search/shows';

  constructor(private _http: Http) { }

  search(query:any): Observable<Show[]> {
    let search: URLSearchParams = new URLSearchParams();
    search.set('q', query)
    return this._http
                      // get the search url
                      .get(this.tvMazeURL, {search})
                      // then map out a response to be the array of shows from tvmaze api json file and return it as a json file
                      .map((response: Response) => <Show[]> response.json())
                      // then take the data and log it out onto console to see
                      .do(data => console.log(data))
                      // if there are any errors, then throw a handle error, which is defined in private handleError
                      .catch(this.handleError);
  }

  // google angular 2 Response. we can see that there are diff types of responses
  private handleError(error: Response) {
    // prints out the status of the error
    let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
    return Observable.throw(msg);
  }
}
