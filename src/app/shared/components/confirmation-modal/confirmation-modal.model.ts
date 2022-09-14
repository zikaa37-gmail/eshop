export interface ConfirmationModalData {
  title: string;
  content: string;
  confirmationLabel: string;
  rejectionLabel: string;
  hasRejectionButton: boolean;
}

export interface ConfirmationModaActionlData {
  data: ConfirmationModalData;
  hasBackdrop: boolean;
  disableClose: boolean;
}

export enum ConfirmationModalAction {
  'PUBLISH' = 'publish',
  'UNPUBLISH' = 'unpublish',
  'DELETE' = 'delete',
}
