import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule, RouterModule],
})
export class NewsListModule {}
