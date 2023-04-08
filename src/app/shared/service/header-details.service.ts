import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HeaderDetails } from 'src/app/constants/header-details';
import { socialMediaDetails } from 'src/app/constants/social-media';

@Injectable({
  providedIn: 'root'
})
export class HeaderDetailsService {

constructor() { }

public getheaderDetails() {
  return of(HeaderDetails);
}
public getHeaderSocialDetails() {
  return of(socialMediaDetails);
}
}
