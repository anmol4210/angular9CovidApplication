import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './portalfooter.component.html',
  styleUrls: ['./portalfooter.component.css'],
})
export class PortalFooterComponent implements OnInit {
  name: String = 'Anmol Narang';
  constructor() {}

  ngOnInit(): void {}
}
