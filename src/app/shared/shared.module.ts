import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { PreviewBoxComponent } from './components/preview-box/preview-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ToasterComponent,
    ConfirmationModalComponent,
    LoaderComponent,
    PreviewBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    ToasterComponent,
    ConfirmationModalComponent,
    LoaderComponent,
    PreviewBoxComponent,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
