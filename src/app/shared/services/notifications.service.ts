import { Injectable, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$ = new BehaviorSubject<Notification[]>([]);
  // @Input() notifications!: Notification[];

  constructor(
    private toastr: ToastrService,
    // private translate: TranslateService
  ) {

  }

  showSuccess(message: string) { // title: string,
    this.toastr.success(message);
    // this.translate.instant(message),
    // this.translate.instant(title),

  }

  showError(message: string) { // title: string,
    this.toastr.error(message);
    // this.translate.instant(message),
    // this.translate.instant(title),

  }

  showInfo(message: string) { // title: string,
    this.toastr.info(message);
    // this.translate.instant(message),
    // this.translate.instant(title),

  }

  showWarning(message: string) { // title: string,
    this.toastr.warning(message);
    //   this.translate.instant(message),
    //   this.translate.instant(title),

  }
}


