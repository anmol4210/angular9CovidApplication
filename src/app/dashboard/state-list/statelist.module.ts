import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateListComponent } from './statelist.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [StateListComponent],
  imports: [CommonModule, RouterModule],
})
export class StateListModule {}
