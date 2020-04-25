import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './portalheader.component.html',
})
export class PortalHeaderComponent implements OnInit {
  title: String = 'Covid19 Updates';
  constructor() {}

  ngOnInit(): void {}
}
