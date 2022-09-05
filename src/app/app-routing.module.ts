import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';

import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ServiceAreaComponent } from './views/service-area/service-area.component';
import { ServicesOfferedComponent } from './views/services-offered/services-offered.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent, data: {title: 'Home'} },
  { path: 'services-offered', component: ServicesOfferedComponent, data: {title: 'Services Offered'} },
  { path: 'service-area', component: ServiceAreaComponent, data: {title: 'Service Area'} },
  { path: 'about', component: AboutComponent, data: {title: 'About'} },
  { path: 'contact', component: ContactComponent, data: {title: 'Contact'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
