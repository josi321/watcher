import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { Details } from './details';
import { Episodes } from './episode';

@Component({
  moduleId: module.id,
  templateUrl: 'details.template.html'
})

export class DetailsComponent implements OnInit {
  // defining the properties
  details: Details;
  episodes: Episodes[];
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private _detailsService: DetailsService) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['show']);
  }

 // defining  our ng init. let the show or id equal to the snapshot route
  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    let show = this.route.snapshot.params['show'];
    this.getShowDetails(id, show);
  }

  getShowDetails(id: number, show: string) {
    // this will display the spinner when its loading
    this.isLoading = true;
    this._detailsService.getShowDetails(id, show)
      .subscribe(
        results => {
          console.log(results);
          this.isLoading = false;
          this.details = results[0];
          this.episodes = results[1];
        },
        error => this.errorMessage = <any>error
        )
  }

}
