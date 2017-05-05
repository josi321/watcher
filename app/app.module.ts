// we always need to import any new modules and components we make to this file!

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { NavbarComponent } from './nav/nav.component'; bc we made a new module called UI module that holds all of it
import { UIModule } from './ui/ui.module';

import './shared/rxjs-extensions';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   UIModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          // NavbarComponent
                          ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
