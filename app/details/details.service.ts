import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Details } from './details';
import { Episodes } from './episode';


@Injectable()
export class DetailsService {
  // a private property which is the url from tvmaze's api
  private tvMazeURL: string = 'https://api.tvmaze.com';

  constructor(private _http: Http) { }

  // get show details and episode data simoultaneously before displaying. we can make a method call getShowDetails with forkjoin
  getShowDetails(id: number, show: string): Observable <any> {
    return Observable.forkJoin([
      this.getShowInfo(show),
      this.getEpisodes(id)
    ])
  }

  getShowInfo(show: string): Observable <Details> {

    return this._http
                      // get the search url
                      .get(`${this.tvMazeURL}/singlesearch/shows?q=${show}`)
                      // then map out a response to be the array of shows from tvmaze api json file and return it as a json file
                      .map((response: Response) => <Details> response.json())
                      // then take the data and log it out onto console to see
                      .do(data => console.log(data))
                      // if there are any errors, then throw a handle error, which is defined in private handleError
                      .catch(this.handleError);
  }

  getEpisodes(id: number): Observable <Episodes[]> {

    return this._http
                      // get the search url
                      .get(`${this.tvMazeURL}/shows/${id}/episodes`)
                      // then map out a response to be the array of shows from tvmaze api json file and return it as a json file
                      .map((response: Response) => <Episodes[]> response.json())
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
