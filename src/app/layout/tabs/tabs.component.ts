import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  isLandingPage: boolean = false;
  isFormActive: boolean = false;

  constructor(private router: Router, private tabsService: TabsService) {
    this.router.events.pipe(
      filter((event: NavigationEvent) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEvent) => {
      const navEndEvent = event as NavigationEnd;
      this.checkUrl(navEndEvent.urlAfterRedirects);
    });

    this.tabsService.formActive$.subscribe(isActive => {
      this.isFormActive = isActive;
    });
  }

  ngOnInit(): void {
  }

  @ViewChild('menuBar') menuBar!: ElementRef;
  @ViewChild('menuIndicator') menuIndicator!: ElementRef;

  ngAfterViewInit() {
    this.setInitialMenuIndicatorPosition();
  }

  setInitialMenuIndicatorPosition() {
    const menuCurrentItem = this.menuBar.nativeElement.querySelector('.sc-current');
    this.updateIndicatorPosition(menuCurrentItem);
  }

  selectMenu(event: Event, index: number) {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    this.updateIndicatorPosition(target);

    this.menuBar.nativeElement.querySelectorAll('.sc-menu-item').forEach((item: HTMLElement) => {
      item.classList.remove('sc-current');
    });
    target.classList.add('sc-current');
  }

  updateIndicatorPosition(element: HTMLElement) {
    const menuPosition = element.offsetLeft - 16;
    this.menuIndicator.nativeElement.style.left = `${menuPosition}px`;
    this.menuBar.nativeElement.style.backgroundPosition = `${menuPosition - 8}px`;
  }

  checkUrl(url: string) {
    this.isLandingPage = url.includes('/landing');
    if (!this.isLandingPage) {
      const index = this.getMenuIndexFromUrl(url);
      const menuItems = this.menuBar.nativeElement.querySelectorAll('.sc-menu-item');
      this.selectMenuByIndex(menuItems, index);
    }
  }

  getMenuIndexFromUrl(url: string): number {
    if (url.includes('/service')) return 0;
    if (url.includes('/home')) return 1;
    if (url.includes('/testimonial')) return 2;
    if (url.includes('/booking')) return 3;
    if (url.includes('/settings')) return 4;
    return -1;
  }

  selectMenuByIndex(menuItems: NodeListOf<HTMLElement>, index: number) {
    if (index >= 0 && index < menuItems.length) {
      const target = menuItems[index];
      this.updateIndicatorPosition(target);

      menuItems.forEach((item: HTMLElement) => {
        item.classList.remove('sc-current');
      });
      target.classList.add('sc-current');
    }
  }
}
