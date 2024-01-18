import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { IconSetService } from '@coreui/icons-angular';
import { TranslateService } from '@ngx-translate/core';
import { iconSubset } from './icons/icon-subset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'BetX Admin Dashboard';

  constructor(
    private _translateService: TranslateService,
    titleService: Title,
    iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.initAppLanguage();
  }

  initAppLanguage(): void {
    this._translateService.setDefaultLang('en-US');
    const browserLanguage = this._translateService.getBrowserCultureLang();
    if (browserLanguage) {
      this._translateService.use(browserLanguage);
    }
  }
}
