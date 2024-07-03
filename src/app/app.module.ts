import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './layout/tabs/tabs.component';
import { HeaderComponent } from './layout/header/header.component';
import { BookingComponent } from './modules/booking/booking.component';
import { ServiceComponent } from './modules/service/service.component';
import { HomeComponent } from './modules/home/home.component';
import { TestimonialComponent } from './modules/testimonial/testimonial.component';
import { LandingComponent } from './layout/landing/landing.component';
import { SettingsComponent } from './modules/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent,
    BookingComponent,
    ServiceComponent,
    HomeComponent,
    TestimonialComponent,
    LandingComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
