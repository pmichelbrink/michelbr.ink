import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home-ink',
  template: `<app-header></app-header>
  <app-home-page></app-home-page>
  <app-projects></app-projects>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LandingFixService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fix.addFix();
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
