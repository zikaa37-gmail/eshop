import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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

    AkitaNgRouterStoreModule,
    AkitaNgDevtools.forRoot(),

    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  // providers:[CategoriesRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
