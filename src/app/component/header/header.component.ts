import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');
    const socialIcons = document.querySelector('.social-icons');
    navToggle.addEventListener("click", () => {
      console.log(links.classList);
      links.classList.toggle("show-links");
      socialIcons.classList.toggle("show-icons");
    });
  }

}
