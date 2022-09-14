import { Injectable } from '@angular/core';
import { ObservableInput, throwError } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private notificationsService: NotificationsService
  ) { }

  handleError(response: any): ObservableInput<any> {
    let errMessage = `Error ${response.status}\n${response.error.message}`;
    this.notificationsService.showError(`ERROR ${errMessage}`);
    return throwError(() => response);
  }
}
