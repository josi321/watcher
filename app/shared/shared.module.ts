// this module is a shared module which means that serveral components all have this

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ CommonModule, FormsModule ]
})

export class SharedModule {}
