import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NewsService } from '../../core/services/news.service';
@NgModule({
  declarations: [AddNewsComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [],
})
export class AddNewsModule {}
