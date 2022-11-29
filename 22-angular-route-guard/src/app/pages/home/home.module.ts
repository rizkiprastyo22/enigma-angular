import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeBannerComponent } from './banner/home-banner.component';
import { HomeNewsletterComponent } from './newsletter/home-newsletter.component';
import { HomeServiceComponent } from './service/home-service.component';
import { HomeAboutComponent } from './about/home-about.component';
import { HomeFaqComponent } from './faq/home-faq.component';
import { HomeInstructorsComponent } from './instructors/home-instructors.component';
import { HomeCoursesComponent } from './courses/home-courses.component';
import { HomeContactComponent } from './contact/home-contact.component';

const components = [
  HomeBannerComponent,
  HomeNewsletterComponent,
  HomeServiceComponent,
  HomeAboutComponent,
  HomeFaqComponent,
  HomeInstructorsComponent,
  HomeCoursesComponent,
  HomeContactComponent
]

@NgModule({
  declarations: [
    HomeComponent,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
