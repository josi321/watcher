// we always need to import any new modules and components we make to this file!

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

// import { NavbarComponent } from './nav/nav.component'; bc we made a new module called UI module that holds all of it
import { UIModule } from './ui/ui.module';
import { CarouselModule } from './carousel/carousel.module';
import { FeaturedModule} from './featured/featured.module';
import { SearchModule } from './search/search.module';
import { DetailsModule } from './details/details.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import './shared/rxjs-extensions';

import {NavService} from './shared/nav.service';

@NgModule({
  imports: [ BrowserModule,
                   HttpModule,
                   FormsModule,
                   UIModule,
                   CarouselModule,
                   FeaturedModule,
                   SearchModule,
                   DetailsModule,
                    AppRoutingModule // this has to be under all the modules
                   ],
  declarations: [ AppComponent,
                  HomeComponent
                 ],
  providers: [ NavService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
