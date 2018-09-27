import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpyParentComponent } from './spy-parent.component';
import { SpyChildDirective } from './spy-child.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[
    SpyParentComponent,
    SpyChildDirective
  ],
  exports: [
    SpyParentComponent
  ]
})
export class OnInitDestroyModule {}
