import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TabsService } from '../../layout/tabs/tabs.service';
declare function tes(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('contactForm', { static: true }) contactForm!: ElementRef;


  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    tes()
  }

  ngAfterViewInit(): void {
    this.contactForm.nativeElement.addEventListener('focusin', () => {
      this.tabsService.setFormActive(true);
    });

    this.contactForm.nativeElement.addEventListener('focusout', () => {
      this.tabsService.setFormActive(false);
    });
  }

}
