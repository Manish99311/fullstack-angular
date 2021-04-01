import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderDetailsService } from 'src/app/shared/service/header-details.service';
import { JsonPipe } from '@angular/common';
import { Header, socialMedia } from 'src/app/shared/model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navItems: Header;
  public socialMediaItems : socialMedia;
  constructor(private headerDetail:HeaderDetailsService) { }

  ngOnInit() {
    const navToggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');
    const socialIcons = document.querySelector('.social-icons');
    navToggle.addEventListener("click", () => {
      console.log(links.classList);
      links.classList.toggle("show-links");
      socialIcons.classList.toggle("show-icons");
    });
    this.headerDetail.getheaderDetails().subscribe (data => {
      this.navItems = JSON.parse(data);
    })
    this.headerDetail.getHeaderSocialDetails().subscribe (data => {
      this.socialMediaItems = JSON.parse(data);
    })

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('nav-center-scroll');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('nav-center-scroll');
     }
  }

}
