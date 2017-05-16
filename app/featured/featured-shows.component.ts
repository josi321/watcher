import { Component, OnInit } from '@angular/core';
import { Featured } from './featured';
import { FeaturedService } from './featured.service';

@Component({
  moduleId: module.id,
  selector: 'tv-featured-shows',
  templateUrl: 'featured-shows.template.html',
  styleUrls: ['styles.css']
})

export class FeaturedShowsComponent implements OnInit {
  // define properties of the featured shows
  shows: Featured[];
  errorMessage: string;

  constructor(private _featureService: FeaturedService) { }
  // makes the request to the service to get the shows to display it
  ngOnInit() {
    this.getFeaturedShows();
  }

  //defining getfeaturedshows method to call on our featured service, then subscribe to our response
  getFeaturedShows() {
    this._featureService.featuredShows()
           .subscribe(
              (shows: Featured[]) => {
                console.log(shows);
                this.shows = shows;
              },
              error => this.errorMessage = <any>error
             );
  }

}
