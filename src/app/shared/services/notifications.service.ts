import { Injectable, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$ = new BehaviorSubject<Notification[]>([]);
  // @Input() notifications!: Notification[];

  constructor(
    // private toastr: ToastrService,
    // private translate: TranslateService
  ) {
    const mockedNotifications: Notification[] = [
      { title: 'test', content: 'test', date: new Date(), seen: false },
      { title: 'test', content: 'test', date: new Date(), seen: false },
      { title: 'test', content: 'test', date: new Date(), seen: false },
      { title: 'test', content: 'test', date: new Date(), seen: false },
      { title: 'test', content: 'test', date: new Date(), seen: false }
    ];
    this.notifications$.next(mockedNotifications);
  }

  showSuccess(title: string, message: string) {
    // this.toastr.success(
    //   this.translate.instant(message),
    //   this.translate.instant(title),
    // );
  }

  showError(title: string, message: string) {
    // this.toastr.error(
    //   this.translate.instant(message),
    //   this.translate.instant(title),
    // );
  }

  showInfo(title: string, message: string) {
    // this.toastr.info(
    //   this.translate.instant(message),
    //   this.translate.instant(title),
    // );
  }

  showWarning(title: string, message: string) {
    // this.toastr.warning(
    //   this.translate.instant(message),
    //   this.translate.instant(title),
    // );
  }
}

export interface Notification {
  title: string;
  content: string;
  date: Date;
  seen: boolean;
}
