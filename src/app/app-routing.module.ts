import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { TestimonialComponent } from './modules/testimonial/testimonial.component';
import { BookingComponent } from './modules/booking/booking.component';
import { ServiceComponent } from './modules/service/service.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
