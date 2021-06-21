import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderBannerComponent } from './component/header-banner/header-banner.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBannerComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
