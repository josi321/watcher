// this is the file that loads into index.html
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng-app',
  templateUrl: 'app.template.html'
})

export class AppComponent {
  appName: string = "Angular Boilerplate";
}
