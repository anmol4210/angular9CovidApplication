import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../shared/interfaces/news';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  providers: [FormBuilder, NewsService],
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;
  // title: FormControl;
  news: News = {
    id: null,
    title: 'New News',
    description: '',
    full_news: '',
    image_url: 'assets/corona.jpg',
    summary: 'New Summary',
  };
  constructor(
    private fb: FormBuilder,
    private newService: NewsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.title = new FormControl();
    // this.newsForm = new FormGroup({
    //   title: new FormControl('Default Value'),
    // });
    this.newsForm = this.fb.group({
      title: [
        { value: null, disabled: false },
        [Validators.required, Validators.minLength(5)],
      ],
      summary: [{ value: null, disabled: false }, Validators.required],
      description: [{ value: null, disabled: false }, Validators.required],
      fullNews: [''],
      imageUrl: ['assets/corona.jpg'],
    });
  }
  save() {
    // console.log('submit called');
    // console.log(this.newsForm.controls);
    this.newService.addNews(this.news).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['news']);
    });
  }
}
