import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let aboutText = document.querySelector('.about-text');
    let aboutImage = document.querySelector('.about-image');
    let introPosition = aboutText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(introPosition < screenPosition) {
      aboutText.classList.add('about-appear');
      aboutImage.classList.add('image-appear');
    }
  }
}
