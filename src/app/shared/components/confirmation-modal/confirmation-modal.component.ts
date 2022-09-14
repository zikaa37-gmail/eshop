import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  public hasRejectionButton = true;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationModalData
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.closeDialog(true);
  }

  public closeDialog(confirmed = false): void {
    this.dialogRef.close(confirmed);
  }
}

export interface ConfirmationModalData {
  title: string;
  content: string;
  confirmationLabel: string;
  rejectionLabel: string;
  hasRejectionButton?: boolean;
}
