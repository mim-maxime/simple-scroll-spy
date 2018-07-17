import { NgModule } from '@angular/core';
import {ScrollSpyContentDirective} from "./simple-scroll-spy-content.directive";
import {ScrollSpyMenuDirective} from "./simple-scroll-spy-menu.directive";

@NgModule({
  imports: [
  ],
  declarations: [
    ScrollSpyContentDirective,
    ScrollSpyMenuDirective
  ],
  exports: [
    ScrollSpyContentDirective,
    ScrollSpyMenuDirective
  ]
})
export class SimpleScrollSpyModule { }
