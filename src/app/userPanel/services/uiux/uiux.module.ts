import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiuxComponent } from './uiux.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "", component: UiuxComponent
      }
    ])
  ]
})
export class UiuxModule { }
