import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-box',
  templateUrl: './preview-box.component.html',
  styleUrls: ['./preview-box.component.scss']
})
export class PreviewBoxComponent {
  @Input() link!: string;
  @Input() name!: string;
  @Input() hasFooter = false;
  @Input() image!: string;
  @Input() price?: number;

}
