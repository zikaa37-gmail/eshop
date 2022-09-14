import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        // toastComponent: ToasterComponent,
        // preventDuplicates: true,
        // autoDismiss: false,
        enableHtml: true,
        timeOut: 5000,
        // disableTimeOut: true,
        progressBar: true,
        progressAnimation: 'increasing',
        // iconClasses: {
        //   error: 'toast-error',
        //   info: 'toast-info',
        //   success: 'toast-success',
        //   warning: 'toast-warning',
        // },
        // newestOnTop: false,
        positionClass: 'toast-bottom-right'
      }
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
