import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['Java Backend Developer.', 'Ux/Ui Designer.', 'Freelancer.'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 const typed = new Typed('.typed-element', options);
  }

}
