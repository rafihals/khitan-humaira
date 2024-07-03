import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  items = [
    { text: 'settings', icon: 'chatbubble-outline', route: '/settings' },
    { text: 'ulasan', icon: 'happy-outline', route: '/testimonial' },
    { text: 'home', icon: 'home-outline', route: '/home' },
    { text: 'service', icon: 'briefcase-outline', route: '/service' },
    { text: 'book', icon: 'add-circle-outline', route: '/booking' }
  ];
  activeIndex = 0;
  isLandingPage: boolean = false;
  isFormActive: boolean = false;

  constructor(
    private router: Router,
    private tabsService: TabsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveItem(event.urlAfterRedirects);
        this.isLandingPage = event.urlAfterRedirects === '/landing';
      }
    });
    this.tabsService.isFormActive$.subscribe(isActive => {
      this.isFormActive = isActive;
    });
  }

  ngOnInit(): void {
    this.updateActiveItem(this.router.url);
    this.isLandingPage = this.router.url === '/landing';
  }

  setActive(index: number): void {
    this.activeIndex = index;
    this.router.navigate([this.items[index].route]);
  }

  private updateActiveItem(url: string): void {
    const index = this.items.findIndex(item => url.includes(item.route));
    this.activeIndex = index !== -1 ? index : 0;
  }
}
