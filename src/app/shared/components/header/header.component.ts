import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { NotificationsService } from '../../services/notifications.service';
import { Notification } from '../../models/notificaions.model';
// import { LanguageService } from '../../services/language.service';
// import { TranslateService } from '@ngx-translate/core';
// import { Credentials, Roles } from '../../../auth/auth.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  allLanguages: string[] = [];
  // notifications$: Observable<Notification[]> = this.notificationsService.notifications$;
  currentLanguage!: string;
  otherLangs: string[] = [];
  showNotifications = false;
  @ViewChild('notificationsPanel') notificationsPanel!: ElementRef;
  // public roles = Roles;
  // user$: Observable<Credentials> = this.authService.credentials$;

  constructor(
    private authService: AuthService,
    public router: Router,
    private notificationsService: NotificationsService
    // public translateService: TranslateService,
    // private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    // this.isAuthenticated$ = this.authService.isAuthenticated$;
    // this.currentLanguage = this.languageService.getSelectedLanguage();
    // this.allLanguages = this.translateService.getLangs();
    // this.otherLangs = this.allLanguages.filter(lang => lang !== this.currentLanguage);
  }

  logout() {
    this.authService.logout();
    this.authService.redirectToLogin();
  }

  // public changeLanguage(language: string): void {
  //   // this.translateService.use(language);
  //   localStorage.setItem('eshop-language', language);
  //   this.currentLanguage = language;
  //   // this.otherLangs = this.translateService.getLangs().filter(lang => lang !== this.currentLanguage);
  // }

  // displayNotifications() {
  //   this.showNotifications = true;
  // }

  // hideNotifications() {
  //   this.showNotifications = false;
  // }

  // markNotificationSeen(notification: Notification) {
  //   notification.seen = true;
  // }

}
