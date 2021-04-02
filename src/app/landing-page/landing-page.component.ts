import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  carouselImagePaths = [
    {
      path: 'assets/images/carousel1.png'
    },
    {
      path: 'assets/images/carousel2.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  beforeChange(event: any) {
  }

  afterChange(event: any) {
  }

}
