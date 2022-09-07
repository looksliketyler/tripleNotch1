import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ServicesOfferedComponent } from './views/services-offered/services-offered.component';
import { AboutComponent } from './views/about/about.component';
import { ServiceAreaComponent } from './views/service-area/service-area.component';
import { ContactComponent } from './views/contact/contact.component';
import { UniversalTabbedCardComponent } from './components/universal-tabbed-card/universal-tabbed-card.component';
import { UniversalTabComponent } from './components/universal-tabbed-card/universal-tab/universal-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    JumbotronComponent,
    ServicesOfferedComponent,
    AboutComponent,
    ServiceAreaComponent,
    ContactComponent,
    UniversalTabbedCardComponent,
    UniversalTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
