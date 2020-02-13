import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'pv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navLinks$: Observable<any> = this.scully.available$;

  socialLinks = [{
    icon: '🤓',
    name: 'GitHub',
    href: 'https://github.com/komock'
  }, {
    icon: '💬',
    name: 'Telegram',
    href: 'https://t.me/vpetrov87'
  }, {
    icon: '📷',
    name: 'Instagram',
    href: 'https://instagram.com/komock/'
  }];

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.navLinks$.subscribe(links => {
      console.log('links: ', links);
    });
  }

}
