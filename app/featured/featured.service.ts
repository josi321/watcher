import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Featured } from './featured';

@Injectable()
export class FeaturedService {
  // a private property which is the url of the carousel items aka our carousel item json file
  private featuredUrl: string = 'api/featured_shows.json';

  constructor(private _http: Http) { }

  featuredShows(): Observable<Featured[]> {
    return this._http
                      // get the featured url
                      .get(this.featuredUrl)
                      // then map out a response to be the array of featured shows and return it as a json file
                      .map((response: Response) => <Featured[]> response.json())
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
