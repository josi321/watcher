import {Component} from '@angular/core';

@Component({
  selector:'tv-search-bar',
  template: `
    <form class="form-inline float-xs-right">
      <input class="form-control" type="text" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  `
})

export class SearchBarComponent {

}
