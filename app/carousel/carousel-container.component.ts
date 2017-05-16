import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel'; // this to import the slides from the carousel
import { CarouselService } from './carousel.service';

@Component({
  moduleId: module.id,
  selector: 'tv-carousel-container',
  templateUrl: 'carousel-container.template.html'
})

export class CarouselContainerComponent implements OnInit {
  // image slides which is type carousel and is an aray
  slides: Carousel[];
  errorMessage: string;

  constructor(private _carouselService: CarouselService) { }

  ngOnInit() {
    // call the get slides method
    this.getSlides();
  }

  // define the get slides metho
  getSlides() {
    //call the feature items method
    this._carouselService.featured()
      .subscribe(
        slides => this.slides = slides,
        error => this.errorMessage = <any>error // type any error
        );
  }

}
