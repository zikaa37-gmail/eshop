import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { ConfirmationModaActionlData } from './confirmation-modal.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {
  publishModalClosed$ = new BehaviorSubject<boolean>(false);
  unpublishModalClosed$ = new BehaviorSubject<boolean>(false);
  deleteModalClosed$ = new BehaviorSubject<boolean>(false);
  modalClosed$ = new BehaviorSubject<string>('');

  constructor(
    public dialog: MatDialog,
  ) { }

  openConfirmationDialog(actionData: ConfirmationModaActionlData, action: string) {
    let dialogRef: MatDialogRef<ConfirmationModalComponent> =
      this.dialog.open(ConfirmationModalComponent, {
        data: {
          title: actionData.data.title,
          content: actionData.data.content,
          confirmationLabel: actionData.data.confirmationLabel,
          rejectionLabel: actionData.data.rejectionLabel,
          hasRejectionButton: actionData.data.hasRejectionButton || true
        },
        hasBackdrop: actionData.hasBackdrop || true,
        disableClose: actionData.disableClose || true
      });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.modalClosed$.next(action);
      }
    });

  }

  deleteDataProductData(): ConfirmationModaActionlData {
    return {
      data: {
        title: 'DELETE_DATA_PRODUCT_TITLE',
        content: 'DELETE_DATA_PRODUCT_CONTENT',
        confirmationLabel: 'DELETE_DATA_PRODUCT_CONFIRMATION_LABEL',
        rejectionLabel: 'DELETE_DATA_PRODUCT_REJECTION_LABEL',
        hasRejectionButton: true
      },
      hasBackdrop: true,
      disableClose: true
    }
  }

  publishDataProductData(): ConfirmationModaActionlData {
    return {
      data: {
        title: 'PUBLISH_DATA_PRODUCT_TITLE',
        content: 'PUBLISH_DATA_PRODUCT_CONTENT',
        confirmationLabel: 'PUBLISH_DATA_PRODUCT_CONFIRMATION_LABEL',
        rejectionLabel: 'PUBLISH_DATA_PRODUCT_REJECTION_LABEL',
        hasRejectionButton: true
      },
      hasBackdrop: true,
      disableClose: true
    }
  }

  unpublishDataProductData(): ConfirmationModaActionlData {
    return {
      data: {
        title: 'UNPUBLISH_DATA_PRODUCT_TITLE',
        content: 'UNPUBLISH_DATA_PRODUCT_CONTENT',
        confirmationLabel: 'UNPUBLISH_DATA_PRODUCT_CONFIRMATION_LABEL',
        rejectionLabel: 'UNPUBLISH_DATA_PRODUCT_REJECTION_LABEL',
        hasRejectionButton: true
      },
      hasBackdrop: true,
      disableClose: true
    }
  }
}
