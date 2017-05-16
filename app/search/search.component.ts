import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';
import { Show } from './show';

@Component({
  moduleId: module.id,
  templateUrl: 'search.template.html'
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  shows: Show[];
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private _fb: FormBuilder,
                        private _searchService: SearchService) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      query: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  searchShows({value}: {value: any}) {
    console.log(value.query);
    this.isLoading = true;
    this.resetSearch();
    this._searchService
          .search(value.query)
          .subscribe(shows => {
            console.log(shows);
            this.isLoading = false;
            this.shows = shows;
          },
          error => this.errorMessage = <any> error
          );
  }

  resetSearch() {
    this.errorMessage = null;
    this.shows = null;
    this.searchForm.reset();
  }
}
