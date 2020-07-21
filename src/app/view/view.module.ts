import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';

@NgModule({
  declarations: [ViewcomponentComponent],
  imports: [
    CommonModule
  ],
  exports : [ViewcomponentComponent]
})
export class ViewModule { }
